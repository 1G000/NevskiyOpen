const players = [
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Евгений",
    secondName: "Макшаков",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 1,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Александр",
    secondName: "Врач",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 2,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Кирилл",
    secondName: "Чокопаев",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 3,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Данила",
    secondName: "Пыленок",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 4,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Александр",
    secondName: "Кирюшин",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 5,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Артем",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 6,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Пётр",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 7,
  },
  {
    imageUrl: "./img/playersPhoto/3.jpg",
    name: "Игорь",
    secondName: "Горбатовский",
    birthDate: "19.02.1990",
    turnToProDate: "2021",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 8,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Григор",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 9,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Сергей",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 10,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Андрей",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 11,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Антон",
    secondName: "Федосеев",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 12,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Александр",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 13,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Яков",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 14,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Сергей",
    secondName: "М",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 15,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Максим",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 16,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Евгений",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 17,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Константин",
    secondName: "Ушаков",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 18,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Александр",
    secondName: "Музыкант",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 19,
  },
  {
    imageUrl: "./img/playersPhoto/noFoto.png",
    name: "Даня",
    secondName: "Фамилия",
    birthDate: "01.12.2022",
    turnToProDate: "02.12.2022",
    powerHand: "Правша",
    backhandStyle: "Двурукий",
    rankingPosition: 20,
  },
]

export default players

// {/* <table>
//         <tr>
//           <th>№</th>
//           <th>Фото</th>
//           <th>Фио</th>
//           <th>Победы</th>
//           <th>Поражения</th>
//           <th>Разница по сетам в/п</th>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td></td>
//           <td>Саша врач</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td></td>
//           <td>Кирилл</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>4</td>
//           <td></td>
//           <td>Данила Пыленок</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>5</td>
//           <td></td>
//           <td>Саша американец</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>6</td>
//           <td></td>
//           <td>Артём</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>7</td>
//           <td></td>
//           <td>Пётр</td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>8</td>
//           <td>
//             {/* <img width={50} height={60} src={"./img/2.jpg"}></img> */}
//     </td>
//     <td>Игорь Горбатовский</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>9</td>
//     <td></td>
//     <td>Григор</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>10</td>
//     <td></td>
//     <td>Сергей</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>11</td>
//     <td></td>
//     <td>Андрей</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>12</td>
//     <td></td>
//     <td>Антон</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>13</td>
//     <td></td>
//     <td>Саша</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>14</td>
//     <td></td>
//     <td>Яков</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>15</td>
//     <td></td>
//     <td>Сергей М</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>16</td>
//     <td></td>
//     <td>Максим</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>17</td>
//     <td></td>
//     <td>Евгений</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>18</td>
//     <td></td>
//     <td>Костя</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>19</td>
//     <td></td>
//     <td>Саша музыкант</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td>20</td>
//     <td></td>
//     <td>Даня</td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
// </table> */}
