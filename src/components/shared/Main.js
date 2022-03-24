import NavLink from "./NavLink";
import listSvg from '../../assets/list.svg';
import addSvg from '../../assets/add.svg';

function Main({children}) {
    return(
        <div className="Main">
            <aside className="aside">
                <NavLink href="/lista" title="Goals List">
                    <div className="aside-svg-container">
                        <img className="aside-svg" src={listSvg} />
                    </div>
                </NavLink>
                <NavLink  href="/crear" title="New Goal">
                    <div className="aside-svg-container">
                        <img className="aside-svg" src={addSvg} />
                    </div>
                </NavLink>
            </aside>
            <main className="main-content">
                {children}
                Hola
            </main>
        </div>
    );
}

export default Main;