import NavLink from "./NavLink";
import listSvg from '../../assets/list.svg';
import addSvg from '../../assets/add.svg';

function Main({children}) {
    return(
        <div className="Main">
            <aside className="aside">
                <NavLink href="/lista" title="">
                    <div className="aside-svg-container flex-hw-align">
                        <img className="aside-svg" src={listSvg} />
                    </div>
                </NavLink>
                <NavLink  href="/crear" title="">
                    <div className="aside-svg-container flex-hw-align">
                        <img className="aside-svg" src={addSvg} />
                    </div>
                </NavLink>
            </aside>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default Main;