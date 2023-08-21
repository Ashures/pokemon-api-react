import NavBar from "./NavBar";

export default function TitleScreen({ title }) {
    return (
        <>
            <div className="main-title-screen">
                <NavBar />
                <div id="title-screen-centred-title">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    );
}