import "./MainBlock.css";
import Card from "./Card";

function MainBlock() {
        const characters = [
            {
                name: "Naruto Uzumaki",
                village: "Konohagakure",
                ability: "Rasengan",
                image: `${import.meta.env.BASE_URL}Images/Naruto.jpg`,
            },
            {
                name: "Sasuke Uchiha",
                village: "Konohagakure",
                ability: "Chidori",
                image: `${import.meta.env.BASE_URL}Images/Sasuke.jpg`,            },
            {
                name: "Sakura Haruno",
                village: "Konohagakure",
                ability: "Medical Ninjutsu",
                image: `${import.meta.env.BASE_URL}Images/Sakura.jpg`,            },
            {
                name: "Kakashi Hatake",
                village: "Konohagakure",
                ability: "Lightning Blade",
                image: `${import.meta.env.BASE_URL}Images/Kakashi.jpg`,            },
            {
                name: "Itachi Uchiha",
                village: "Konohagakure",
                ability: "Amaterasu",
                image: `${import.meta.env.BASE_URL}Images/Itachi.jpg`,            },
            {
                name: "Minato Namikaze",
                village: "Konohagakure",
                ability: "Flying Raijin",
                image: `${import.meta.env.BASE_URL}Images/Minato.jpg`,            },
            {
                name: "Jiraiya",
                village: "Konohagakure",
                ability: "Sage Mode",
                image: `${import.meta.env.BASE_URL}Images/Jiraiya.jpg`,            },
            {
                name: "Tsunade",
                village: "Konohagakure",
                ability: "Medical Ninjutsu",
                image: `${import.meta.env.BASE_URL}Images/Tsunade.jpg`,            },
            {
                name: "Orochimaru",
                village: "Otogakure",
                ability: "Summoning Jutsu",
                image: `${import.meta.env.BASE_URL}Images/Orochimaru.jpg`,            },
            {
                name: "Hinata Hyuga",
                village: "Konohagakure",
                ability: "Byakugan",
                image: `${import.meta.env.BASE_URL}Images/Hinata.jpg`,            },
            {
                name: "Shikamaru Nara",
                village: "Konohagakure",
                ability: "Shadow Possession",
                image: `${import.meta.env.BASE_URL}Images/Shikamaru.jpg`,            },
            {
                name: "Rock Lee",
                village: "Konohagakure",
                ability: "Eight Gates",
                image: `${import.meta.env.BASE_URL}Images/RockLee.jpg`,            },
            {
                name: "Gaara",
                village: "Sunagakure",
                ability: "Sand Manipulation",
                image: `${import.meta.env.BASE_URL}Images/Gaara.jpg`,            },
            {
                name: "Pain",
                village: "Amegakure",
                ability: "Shinra Tensei",
                image: `${import.meta.env.BASE_URL}Images/Pain.jpg`,            },
            {
                name: "Konan",
                village: "Amegakure",
                ability: "Paper Ninjutsu",
                image: `${import.meta.env.BASE_URL}Images/Konan.jpg`,            },
            {
                name: "Kisame Hoshigaki",
                village: "Kirigakure",
                ability: "Water Release",
                image: `${import.meta.env.BASE_URL}Images/Kisame.jpg`,            },
            {
                name: "Deidara",
                village: "Iwagakure",
                ability: "Explosive Clay",
                image: `${import.meta.env.BASE_URL}Images/Deidara.jpg`,            },
            {
                name: "Tobi",
                village: "Konohagakure",
                ability: "Kamui",
                image: `${import.meta.env.BASE_URL}Images/Tobi.jpg`,            },
            {
                name: "Madara Uchiha",
                village: "Konohagakure",
                ability: "Susanoo",
                image: `${import.meta.env.BASE_URL}Images/Madara.jpg`,            },
            {
                name: "Hashirama Senju",
                village: "Konohagakure",
                ability: "Wood Release",
                image: `${import.meta.env.BASE_URL}Images/Hashirama.jpg`,            }

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
                    <img
                        src={`${import.meta.env.BASE_URL}Images/NarutoMain.png`}
                        alt="Naruto"
                    />
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