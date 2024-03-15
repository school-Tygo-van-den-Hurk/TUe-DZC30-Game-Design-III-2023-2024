export default function getFooter() {
    const linkToRepository = (`https://github.com/Tygo-van-den-Hurk-school/TUe-DZC20-Game-Design-III-2023-2024`);
    return (
        <footer>
            <p>
                This website was developed for <code>Game Design III</code> for the <code>{getTUeLink()}</code>. 
                To see the source code, go to <code>
                    <a href={linkToRepository} style={{color:"#000"}}>the GitHub</a>
                </code>.
            </p>
            <br />
            {getCopyright()}
        </footer>
    );
}

/**
 * Returns a string with the copyright notice.
 * 
 * @returns a string of the following format: 
 * `Copyright &copy; ${copyrightYearRangeString} &middot; Group 4 for Game Design &middot; All rights reserved.`
 * where `copyrightYearRangeString` is either the launch year, or a range from the launch year to the current year.
 */
export function getCopyright() {
    
    const tue = (getTUeLink());
    const launchYear = (2024);
    const currentYear = (new Date().getFullYear());
    const result = ( 
        (currentYear === launchYear)
        ? (`${launchYear}`)
        : (`${launchYear}-${currentYear}`)
    );

    return (
        <p>
            Copyright &copy; {result} &middot; Group 4 for Game Design III at {tue} &middot; All rights reserved.
        </p>
    );
}

/**
 * 
 * @returns a link to the TU/e Site.
 */
function getTUeLink() {
    return (
        <a href="https://tue.nl" style={{color:"#FF0000"}}>
            TU/e
        </a>
    );
}