// const products = [
//     {id: 1, name: 'Horizon Forbidden West', platform: 'PS4 y PS5', units: 60, type: 'Aventura', price: 69.99, image: "Images/Horizon Forbidden Wes.jpg" },
//     {id: 2, name: 'Kena Bridge of Spirits', platform: 'PS4 y PS5', units: 60, type: 'Aventura', price: 39.99, image: "Images/Kena Bridge of Spirits.jpg" },
//     {id: 3, name: 'Assassins Creed Valhalla', platform: 'PS4', units: 60, type: 'Aventura', price: 23.99,  image: "Images/Assassins Creed Valhalla.jpg" },
//     {id: 4, name: 'The Last of Us Part II', platform: 'PS4', units: 60, type: 'Aventura', price: 39.99, image: "Images/The Last of Us Part II.jpg"},
//     {id: 5, name: 'Returnal', platform: 'PS5', units: 60, type: 'Aventura', price: 69.99, image: "Images/Returnal.jpg"},
//     {id: 6, name: 'Ghostwire: Tokyo', platform: 'PS5', units: 60, type: 'Aventura', price: 59.99, image: "Images/Ghostwire Tokyo.jpg" },
//     {id: 7, name: 'Trek to Yomi', platform: 'PS4 y PS5', units: 60, type: 'Acción', price: 19.99, image: "Images/Trek to Yomi.jpg"},
//     {id: 8, name: 'Sniper Elite 5', platform: 'PS4 y PS5', units: 60, type: 'Acción', price: 59.99, image: "Images/Sniper Elite 5.jpg" },
//     {id: 9, name: 'Far Cry 6', platform: 'PS4 y PS5', units: 60, type: 'Acción', price: 39.99, image: "Images/Far Cry 6.jpg"},
//     {id: 10, name: 'Grand Theft Auto', platform: 'PS4 y PS5', units: 60, type: 'Acción', price: 29.99, image: "Images/Grand Theft Auto v.jpg"},
//     {id: 11, name: 'God Of War', platform: 'PS4', units: 60, type: 'Acción', price: 19.99, image: "Images/God Of War.jpg"},
//     {id: 12, name: 'Watch Dogs: Legion', platform: 'PS4 y PS5', units: 60, type: 'Acción', price: 15.99, image: "Images/Watch Dogs Legion.jpg"},
//     {id: 13, name: 'NBA 2K22', platform: 'PS4 y PS5', units: 60, type: 'Deportes', price: 69.99, image: "Images/NBA 2K22.jpg"},
//     {id: 14, name: 'Madden NFL 22', platform: 'PS4 y PS5', units: 60, type: 'Deportes', price: 99.99, image: "Images/Madden NFL 22.jpg"},
//     {id: 15, name: 'FIFA 22', platform: 'PS4 y PS5', units: 60, type: 'Deportes', price: 59.99, image: "Images/FIFA 22.jpg"},
//     {id: 16, name: 'WWE 2K22', platform: 'PS4 yPS5', units: 60, type: 'Deportes', price: 69.99, image: "Images/WWE 2K22.jpg"},
//     {id: 17, name: 'F1 22', platform: 'PS4 y PS5', units: 60, type: 'Deportes', price: 69.99, image: "Images/F1 22.jpg"},
//     {id: 18, name: 'Matchpoint - Tennis', platform: 'PS4 y PS5', units: 60, type: 'Deportes', price: 49.99, image: "Images/Matchpoint  Tennis.jpg"},
//     {id: 19, name: 'Saints Row', platform: 'PS5', units: 60, type: 'Juego de disparos', price: 30.99, image: "Images/Saints Row.jpg"},
//     {id: 20, name: 'Cyberpunk', platform: 'PS4 y PS5', units: 60, type: 'Juego de disparos', price: 49.99, image: "Images/Cyberpunk.jpg"},
//     {id: 21, name: 'Apex Legends', platform: 'PS5', units: 60, type: 'Juego de disparos', price: 0, image: "Images/Apex Legends.jpg"},
//     {id: 22, name: 'Battlefield 2042', platform: 'PS4', units: 60, type: 'Juego de disparos', price: 59.99, image: "Images/Battlefield 2042.jpg"},
//     {id: 23, name: 'Fortnite', platform: 'PS4 y PS5', units: 60, type: 'Juego de disparos', price: 0, image: "Images/Fortnite.jpg"},
//     {id: 24, name: 'Red Dead Redemption 2', platform: 'PS5', units: 60, type: 'Juego de disparos', price: 30.99, image: "Images/Red Dead Redemption 2.jpg"},
//     {id: 25, name: 'Hello Neighbor 2', platform: 'PS4 y PS5', units: 60, type: 'Terror', price: 39.99, image: "Images/Hello Neighbor 2.jpg"},
//     {id: 26, name: 'The Quarry', platform: 'PS4 y PS5', units: 60, type: 'Terror', price: 69.99, image: "Images/The quarry.jpg"},
//     {id: 27, name: 'The Trap Remake', platform: 'PS5', units: 60, type: 'Terror', price: 29.99, image: "Images/The Trap Remake.jpg"},
//     {id: 28, name: 'Chernobylite', platform: 'PS5', units: 60, type: 'Terror', price: 29.99, image: "Images/Chernobylite.jpg"},
//     {id: 29, name: 'Insomnis Long Night', platform: 'PS4', units: 60, type: 'Terror', price: 19.99, image: "Images/Insomnis Long Night.jpg"},
//     {id: 30, name: 'TAPE: Unveil the Memories', platform: 'PS4', units: 60, type: 'Terror', price: 19.99, image: "Images/TAPE Unveil the Memories.jpg"},
//     {id: 31, name: 'Days gone', platform: 'PS4 Y PS5', units: 60, type: 'Acción', price: 29.99, image: "Images/Days gone.jpg"},
//     {id: 32, name: 'Payday 2', platform: 'PS4', units: 60, type: 'Acción', price: 10.99, image: "Images/Payday 2.jpg"},
//     {id: 33, name: 'PUBG BATTLEGRUNDS', platform: 'PS4', units: 60, type: 'Acción', price: 0, image: "Images/Pubg battlegrounds.jpg"},
//     {id: 34, name: 'Warface', platform: 'PS4', units: 60, type: 'Acción', price: 9.99, image: "Images/Warface.jpg"},
//     {id: 35, name: 'Dead Cells', platform: 'PS4 y PS5', units: 60, type: 'Acción', price: 12.49, image: "Images/Dead Cells.jpg"},
//     {id: 36, name: 'Shadow of the colossus', platform: 'PS4', units: 60, type: 'Aventura', price: 32.49, image: "Images/Shadow of the colossus.jpg"},
//     {id: 37, name: 'Meneater', platform: 'PS4 y PS5', units: 60, type: 'Aventura', price: 27.49, image: "Images/Meneater.jpg"},
//     {id: 38, name: 'Ashen', platform: 'PS5', units: 60, type: 'Aventura', price: 13.49, image: "Images/Ashen.jpg"},
//     {id: 39, name: 'Moonlighter', platform: 'PS5', units: 60, type: 'Aventura', price: 18.49, image: "Images/Moonlighter.jpg"},
//     {id: 40, name: 'ADR1FT', platform: 'PS4', units: 60, type: 'Aventura', price: 19.50, image: "Images/ADR1FT.jpg"},
//     {id: 41, name: 'Battlefield 1', platform: 'PS4 y PS5', units: 60, type: 'Juego de disparos', price: 39.14, image: "Images/Battlefield 1.jpg"},
//     {id: 42, name: 'Crysis Remastered', platform: 'PS5', units: 60, type: 'Juego de disparos', price: 27.50, image: "Images/Crysis Remastered.jpg"},
//     {id: 43, name: 'Mega zombie', platform: 'PS4', units: 60, type: 'Juego de disparos', price: 19.99, image: "Images/Mega Zombie.jpg"},
//     {id: 44, name: 'Anthem', platform: 'PS5', units: 60, type: 'Juego de disparos', price: 20.99, image: "Images/Anthem.jpg"},
//     {id: 45, name: 'Metro exodus', platform: 'PS4 y PS5', units: 60, type: 'Juego de disparos', price: 9.99, image: "Images/Metro Exodus.jpg"},
//     {id: 46, name: 'Riders Republic', platform: 'PS4 y PS5', units: 60, type: 'Deportes', price: 23.99, image: "Images/Riders Republic.jpg"},
//     {id: 47, name: 'MBL The Show 19', platform: 'PS4', units: 60, type: 'Deportes', price: 29.99, image: "Images/MLB The Show 19.jpg"},
//     {id: 48, name: 'Moto Racer 4', platform: 'PS5', units: 60, type: 'Deportes', price: 33.99, image: "Images/Motor Racer 4.jpg"},
//     {id: 49, name: 'OlliOlli World', platform: 'PS4 y PS5', units: 60, type: 'Deportes', price: 29.99, image: "Images/OlliOlli World.jpg"},
//     {id: 50, name: 'Overpass', platform: 'PS4', units: 60, type: 'Deportes', price: 29.99, image: "Images/Overpass.jpg"},
//     {id: 51, name: 'Dead by Daylight', platform: 'PS4', units: 60, type: 'Terror', price: 29.99, image: "Images/Dead by Daylight.jpg"},
//     {id: 52, name: 'Bendy', platform: 'PS4', units: 60, type: 'Terror', price: 29.99, image: "Images/Bendy.jpg"},
//     {id: 53, name: 'CASE Animatronics', platform: 'PS4', units: 60, type: 'Terror', price: 29.99, image: "Images/CASE Animatronics.jpg"},
//     {id: 54, name: 'Ellen', platform: 'PS4', units: 60, type: 'Terror', price: 29.99, image: "Images/Ellen.jpg"},
//     {id: 55, name: 'Sagebrush', platform: 'PS4', units: 60, type: 'Terror', price: 29.99, image: "Images/Sagebrush.jpg"},
// ];