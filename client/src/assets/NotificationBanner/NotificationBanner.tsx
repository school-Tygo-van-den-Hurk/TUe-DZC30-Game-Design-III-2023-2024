import { CSSProperties, HTMLAttributes, useState } from "react";
import "./NotificationBanner.css";

/** The types of `NotificationBanner` you can have. */
export enum NotificationBannerTypes {
    warning,
    error,
    success,
    loading
}

/** The properties of the `NotificationBanner`. */
export interface NotificationBannerProps extends HTMLAttributes<HTMLParagraphElement> {
    type:NotificationBannerTypes,
    dismissible?:boolean,
    autoDismissAfter?:number
}

/** The color scheme the banner will have depending on the `NotificationBannerType`. */
export const ColorSchemes : { [key in NotificationBannerTypes] : CSSProperties } = {
    [NotificationBannerTypes.warning] : { color : "orange",    backgroundColor : "yellow"     },
    [NotificationBannerTypes.error]   : { color : "red",       backgroundColor : "coral"      },
    [NotificationBannerTypes.success] : { color : "green",     backgroundColor : "lightgreen" },
    [NotificationBannerTypes.loading] : { color : "darkgray",  backgroundColor : "lightgray"  }
};

/**
 * Creates a banner that shows some text. Can be dismissed unless `props.dismissible` is truthy.
 * Auto dismisses after `props.autoDismissAfter`. if `props.autoDismissAfter` is falsy, then it 
 * does not dismiss automatically.
 * 
 * @param { NotificationBannerProps } props the properties of the `NotificationBanner`.
 * @returns a new `NotificationBanner` with the inner HTML as it's text.
 */
export default function NotificationBanner(props:NotificationBannerProps) {
    
    const [displayState, setDisplayState] = useState(true);

    const notificationBannerStyle : CSSProperties = { ...ColorSchemes[props.type] };
    const displayBanner = ( (displayState) ? ("") : ("fading-out") );
    const displayCross = ( (props.dismissible === false) ? ("hidden") : ("") );

    if (props.autoDismissAfter) setInterval(() => setDisplayState(false), props.autoDismissAfter);

    const handleClick = ( () => { 
        if (props.dismissible === false) return; 
        else setDisplayState(false);
    } );

    return (
        <div className={`notification-banner-container ${displayBanner}`}>
            <div className="notification-banner" style={notificationBannerStyle}>
                <div/>
                <p className="notification-banner-text" > { props.children } </p>
                <svg className={`notification-banner-cross ${displayCross}`} onClick={handleClick} version="1.1" 
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                viewBox="0 0 490 490">
                    <polygon className="notification-banner-cross-component" 
                    points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678
                    33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>
                </svg>
            </div>
        </div>
    );
}
