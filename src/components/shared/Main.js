function Main({children}) {
    return(
        <>
            <sidenav>
                <a href="/lista">List</a>
                <a href="/crear">Create</a>
            </sidenav>
            <main>
                {children}
            </main>
        </>
    );
}

export default Main;