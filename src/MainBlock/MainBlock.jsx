import "./MainBlock.css";
import Card from "./Card";

function MainBlock() {
        const characters = [
            {
                name: "Naruto Uzumaki",
                village: "Konohagakure",
                ability: "Rasengan",
                image: "/Images/Naruto.jpg"
            },
            {
                name: "Sasuke Uchiha",
                village: "Konohagakure",
                ability: "Chidori",
                image: "/Images/Sasuke.jpg"
            },
            {
                name: "Sakura Haruno",
                village: "Konohagakure",
                ability: "Medical Ninjutsu",
                image: "/Images/Sakura.jpg"
            },
            {
                name: "Kakashi Hatake",
                village: "Konohagakure",
                ability: "Lightning Blade",
                image: "/Images/Kakashi.jpg"
            },
            {
                name: "Itachi Uchiha",
                village: "Konohagakure",
                ability: "Amaterasu",
                image: "/Images/Itachi.jpg"
            },
            {
                name: "Minato Namikaze",
                village: "Konohagakure",
                ability: "Flying Raijin",
                image: "/Images/Minato.jpg"
            },
            {
                name: "Jiraiya",
                village: "Konohagakure",
                ability: "Sage Mode",
                image: "/Images/Jiraiya.jpg"
            },
            {
                name: "Tsunade",
                village: "Konohagakure",
                ability: "Medical Ninjutsu",
                image: "/Images/Tsunade.jpg"
            },
            {
                name: "Orochimaru",
                village: "Otogakure",
                ability: "Summoning Jutsu",
                image: "/Images/Orochimaru.jpg"
            },
            {
                name: "Hinata Hyuga",
                village: "Konohagakure",
                ability: "Byakugan",
                image: "/Images/Hinata.jpg"
            },
            {
                name: "Shikamaru Nara",
                village: "Konohagakure",
                ability: "Shadow Possession",
                image: "/Images/Shikamaru.jpg"
            },
            {
                name: "Rock Lee",
                village: "Konohagakure",
                ability: "Eight Gates",
                image: "/Images/RockLee.jpg"
            },
            {
                name: "Gaara",
                village: "Sunagakure",
                ability: "Sand Manipulation",
                image: "/Images/Gaara.jpg"
            },
            {
                name: "Pain",
                village: "Amegakure",
                ability: "Shinra Tensei",
                image: "/Images/Pain.jpg"
            },
            {
                name: "Konan",
                village: "Amegakure",
                ability: "Paper Ninjutsu",
                image: "/Images/Konan.jpg"
            },
            {
                name: "Kisame Hoshigaki",
                village: "Kirigakure",
                ability: "Water Release",
                image: "/Images/Kisame.jpg"
            },
            {
                name: "Deidara",
                village: "Iwagakure",
                ability: "Explosive Clay",
                image: "/Images/Deidara.jpg"
            },
            {
                name: "Obito Uchiha",
                village: "Konohagakure",
                ability: "Kamui",
                image: "/Images/Tobi.jpg"
            },
            {
                name: "Madara Uchiha",
                village: "Konohagakure",
                ability: "Susanoo",
                image: "/Images/Madara.jpg"
            },
            {
                name: "Hashirama Senju",
                village: "Konohagakure",
                ability: "Wood Release",
                image: "/Images/Hashirama.jpg"
            }

        ];
    return (
        <>
            <main className="main">

                <div className="main-text">
                    <h1>WELCOME TO THE SHINOBI WORLD</h1>

                    <p>
                        Discover the legendary world of Naruto.
                        Meet the shinobi and choose your path!
                    </p>

                    <a href="#characters">EXPLORE CHARACTERS</a>
                </div>

                <div className="main-image">
                    <img src="/Images/NarutoMain.png" alt="Naruto" />
                </div>

            </main>

            <section className="characters" id="characters">
                <h2>CHOOSE YOUR SHINOBI</h2>

                <div className="characters-list">

                    {characters.map((character) => (
                        <Card
                            key={character.name}
                            name={character.name}
                            village={character.village}
                            ability={character.ability}
                            image={character.image}
                        />
                    ))}
                </div>

            </section>
        </>
    );
}

export default MainBlock;