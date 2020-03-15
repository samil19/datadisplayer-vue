<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <card
      :items="elements"
      header="NombreSolicitud"
      footer="Grupo"
      bodyName="Responsable"
      :body="names"
    />
  </div>
</template>

<script>
import card from "./components/card.vue";

export default {
  name: "App",
  components: {
    card
  },
  data: () => {
    return {
      elements: [
        {
          Id: "B0B373A6-2A9A-01ED-DC74-05D6417F04AD",
          NombreSolicitud: "9838 Interdum Rd.",
          Responsable: "Kevin",
          FechaInicio: "06/10/20",
          FechaFin: "01/24/21",
          Zona: "Alberta",
          Grupo: "Est Mauris Eu Incorporated",
          Tel: "(024) 0547 7846"
        },
        {
          Id: "9DE0C423-E50A-DB59-D145-677A117912F6",
          NombreSolicitud: "Ap #583-3658 Tristique Av.",
          Responsable: "Marah",
          FechaInicio: "07/17/20",
          FechaFin: "10/25/20",
          Zona: "WA",
          Grupo: "Vestibulum Associates",
          Tel: "07624 793784"
        },
        {
          Id: "3D612F24-B748-B071-0B7C-E5C7680F0099",
          NombreSolicitud: "Ap #115-8875 Fermentum Rd.",
          Responsable: "Ferdinand",
          FechaInicio: "10/06/20",
          FechaFin: "03/07/21",
          Zona: "Hamburg",
          Grupo: "Adipiscing Non Incorporated",
          Tel: "0845 46 42"
        },
        {
          Id: "5B930F34-35A2-FD5E-6380-3F91FDFB7482",
          NombreSolicitud: "498-1439 Sed Avenue",
          Responsable: "Amena",
          FechaInicio: "01/10/20",
          FechaFin: "12/01/19",
          Zona: "Gyeonggi",
          Grupo: "Feugiat Institute",
          Tel: "(01277) 260759"
        },
        {
          Id: "B437F83A-E0E3-EBD0-B60A-860C27BF8F46",
          NombreSolicitud: "920-8839 Tincidunt. Rd.",
          Responsable: "Glenna",
          FechaInicio: "07/16/19",
          FechaFin: "10/18/19",
          Zona: "MP",
          Grupo: "Vestibulum Nec LLP",
          Tel: "(0151) 283 2639"
        },
        {
          Id: "AB8073D8-9490-C2D3-9476-91E0327C7625",
          NombreSolicitud: "8367 Justo Av.",
          Responsable: "Zelda",
          FechaInicio: "02/12/20",
          FechaFin: "05/05/19",
          Zona: "Ant",
          Grupo: "Sed Molestie Sed Inc.",
          Tel: "(01392) 76816"
        },
        {
          Id: "AF6B4270-F7DC-C8AB-C32C-09CF6F77951A",
          NombreSolicitud: "P.O. Box 768, 9213 Sit St.",
          Responsable: "Zeus",
          FechaInicio: "03/11/20",
          FechaFin: "01/15/20",
          Zona: "Cajamarca",
          Grupo: "Porttitor Vulputate Posuere Limited",
          Tel: "070 1311 0871"
        },
        {
          Id: "F4CC645A-0490-4AAD-A217-D6484D4428F7",
          NombreSolicitud: "861-3707 Eget St.",
          Responsable: "Ifeoma",
          FechaInicio: "09/25/20",
          FechaFin: "06/28/20",
          Zona: "L",
          Grupo: "Ligula Nullam Enim Foundation",
          Tel: "0800 1111"
        },
        {
          Id: "BA32D5BB-2FAF-2087-4F33-1A3322BB48F7",
          NombreSolicitud: "273-8163 Molestie Avenue",
          Responsable: "Rylee",
          FechaInicio: "10/07/20",
          FechaFin: "01/06/20",
          Zona: "West Java",
          Grupo: "Ipsum Curabitur Consequat Ltd",
          Tel: "0800 883337"
        },
        {
          Id: "01D76E9D-7158-BFB4-C484-2FE24CDEDD88",
          NombreSolicitud: "P.O. Box 536, 7553 Dolor St.",
          Responsable: "Seth",
          FechaInicio: "11/30/19",
          FechaFin: "05/02/19",
          Zona: "Montana",
          Grupo: "Ipsum Inc.",
          Tel: "(01053) 270079"
        },
        {
          Id: "427EEC0B-AF3D-774C-19C9-B883D486AFE8",
          NombreSolicitud: "2688 Sed St.",
          Responsable: "Gemma",
          FechaInicio: "05/12/19",
          FechaFin: "12/18/19",
          Zona: "Ist",
          Grupo: "Pede Nec Inc.",
          Tel: "07297 129226"
        },
        {
          Id: "080354F1-F737-A286-19FF-6E620DC3C404",
          NombreSolicitud: "P.O. Box 580, 950 Suspendisse Ave",
          Responsable: "Katell",
          FechaInicio: "03/11/20",
          FechaFin: "08/01/20",
          Zona: "Toscana",
          Grupo: "Molestie Dapibus Limited",
          Tel: "055 0052 5075"
        },
        {
          Id: "86059AF7-3F3A-7162-F82F-3DB2C59CB465",
          NombreSolicitud: "P.O. Box 977, 2935 Pellentesque. Avenue",
          Responsable: "Emery",
          FechaInicio: "01/13/20",
          FechaFin: "02/27/21",
          Zona: "AB",
          Grupo: "Dis Parturient Inc.",
          Tel: "0928 767 7856"
        },
        {
          Id: "3DD61F0C-809B-4FEC-A5D9-BAB9A042174D",
          NombreSolicitud: "3268 Elit, St.",
          Responsable: "Tallulah",
          FechaInicio: "12/20/20",
          FechaFin: "02/26/21",
          Zona: "UP",
          Grupo: "Integer Tincidunt Aliquam Institute",
          Tel: "0368 329 6163"
        },
        {
          Id: "5FA2B179-053C-F667-5EDA-B84E6CCBD8AD",
          NombreSolicitud: "5607 Ac Rd.",
          Responsable: "Lunea",
          FechaInicio: "02/21/21",
          FechaFin: "06/15/19",
          Zona: "NE",
          Grupo: "Elit Inc.",
          Tel: "076 6181 1567"
        },
        {
          Id: "17CC0353-DE9F-8EC0-65E1-0436D3E03BAE",
          NombreSolicitud: "Ap #719-8868 Tristique Street",
          Responsable: "Naida",
          FechaInicio: "11/06/19",
          FechaFin: "03/21/20",
          Zona: "OY",
          Grupo: "Eget Volutpat Ornare Corporation",
          Tel: "(0114) 365 5420"
        },
        {
          Id: "D9A0284D-71C3-5314-AD9C-407CC57D3C54",
          NombreSolicitud: "Ap #463-3745 Dui. St.",
          Responsable: "Wylie",
          FechaInicio: "02/20/20",
          FechaFin: "09/10/20",
          Zona: "Galicia",
          Grupo: "Risus Varius Orci Corporation",
          Tel: "0825 996 7674"
        },
        {
          Id: "69E2F391-897A-C388-99FD-D6C62C2A58E5",
          NombreSolicitud: "P.O. Box 570, 3203 Vitae, Street",
          Responsable: "Levi",
          FechaInicio: "07/15/20",
          FechaFin: "07/30/20",
          Zona: "IL",
          Grupo: "Habitant Morbi Tristique Limited",
          Tel: "0845 46 48"
        },
        {
          Id: "9BD30475-AECB-F8FC-BC89-28C7865DF97A",
          NombreSolicitud: "132-618 Fames St.",
          Responsable: "Thomas",
          FechaInicio: "10/31/20",
          FechaFin: "02/19/21",
          Zona: "Ankara",
          Grupo: "Eget Dictum Placerat Ltd",
          Tel: "0845 46 42"
        },
        {
          Id: "860F7082-DC6A-C725-28E6-1EDCD6D64A1A",
          NombreSolicitud: "P.O. Box 952, 1092 Enim Street",
          Responsable: "Bianca",
          FechaInicio: "06/13/20",
          FechaFin: "09/27/19",
          Zona: "Aquitaine",
          Grupo: "Feugiat Incorporated",
          Tel: "0377 828 6005"
        },
        {
          Id: "D8E873EF-794F-AEE4-FB49-AA3B19D1231F",
          NombreSolicitud: "3871 Sed St.",
          Responsable: "August",
          FechaInicio: "02/21/21",
          FechaFin: "05/31/19",
          Zona: "San José",
          Grupo: "Duis Dignissim Institute",
          Tel: "(0118) 390 8932"
        },
        {
          Id: "4E650F71-1726-0EEA-DB85-DFDB6BCD2E57",
          NombreSolicitud: "Ap #450-7531 Ridiculus St.",
          Responsable: "Karen",
          FechaInicio: "06/11/19",
          FechaFin: "08/22/19",
          Zona: "HI",
          Grupo: "Non Luctus Sit PC",
          Tel: "(01169) 220678"
        },
        {
          Id: "21486A15-E447-94F5-9FE6-0A794898D547",
          NombreSolicitud: "P.O. Box 995, 3791 Ac Street",
          Responsable: "Judah",
          FechaInicio: "02/02/21",
          FechaFin: "12/28/19",
          Zona: "QLD",
          Grupo: "In Associates",
          Tel: "0800 1111"
        },
        {
          Id: "57F8CBDD-7024-AA97-FA33-3D34C2505702",
          NombreSolicitud: "Ap #534-5021 Nunc Road",
          Responsable: "Bruce",
          FechaInicio: "12/21/19",
          FechaFin: "11/21/19",
          Zona: "AB",
          Grupo: "Tellus Inc.",
          Tel: "(017281) 56923"
        },
        {
          Id: "5FCC8152-86CB-6EB0-3FD8-E7503BADB2E4",
          NombreSolicitud: "582-212 Sit St.",
          Responsable: "Nissim",
          FechaInicio: "11/17/19",
          FechaFin: "12/14/19",
          Zona: "Antioquia",
          Grupo: "Fusce Feugiat Lorem Corporation",
          Tel: "07624 384020"
        },
        {
          Id: "07F7222F-70BA-2805-6337-8FBBD669B854",
          NombreSolicitud: "141-5732 Justo. Road",
          Responsable: "Barbara",
          FechaInicio: "11/10/20",
          FechaFin: "07/04/19",
          Zona: "LA",
          Grupo: "Tempor Arcu Inc.",
          Tel: "0800 541 9752"
        },
        {
          Id: "1CEEB815-66BF-9D6A-D7EB-0136635B1861",
          NombreSolicitud: "3989 A Rd.",
          Responsable: "Lee",
          FechaInicio: "09/09/19",
          FechaFin: "10/03/19",
          Zona: "Uttar Pradesh",
          Grupo: "Vestibulum Massa Rutrum Inc.",
          Tel: "0800 1111"
        },
        {
          Id: "10C24FC2-F923-D61E-21B0-FB46E8A2B8FC",
          NombreSolicitud: "706-5909 Dui Ave",
          Responsable: "Buffy",
          FechaInicio: "01/01/21",
          FechaFin: "07/22/19",
          Zona: "Junín",
          Grupo: "Habitant Morbi Tristique Ltd",
          Tel: "0500 312365"
        },
        {
          Id: "9D377B94-36DE-A01F-DE2A-46383D21F1AD",
          NombreSolicitud: "3075 A Avenue",
          Responsable: "Jana",
          FechaInicio: "03/15/19",
          FechaFin: "04/14/20",
          Zona: "Uttar Pradesh",
          Grupo: "Dolor Institute",
          Tel: "0845 46 44"
        },
        {
          Id: "BA904571-612F-4C3C-917D-1EFC632F567A",
          NombreSolicitud: "5894 Eget, St.",
          Responsable: "Vincent",
          FechaInicio: "06/16/19",
          FechaFin: "12/28/19",
          Zona: "Leinster",
          Grupo: "Curabitur LLC",
          Tel: "07500 569505"
        },
        {
          Id: "E22D006C-27DF-5EC6-E16B-5ED6798E03C2",
          NombreSolicitud: "709-9875 Dui. St.",
          Responsable: "Janna",
          FechaInicio: "05/11/20",
          FechaFin: "11/23/19",
          Zona: "São Paulo",
          Grupo: "Cras Eu Tellus Incorporated",
          Tel: "0500 440846"
        },
        {
          Id: "F37DC03F-268E-5B09-7639-A682DBC74E57",
          NombreSolicitud: "Ap #621-5651 Metus Rd.",
          Responsable: "Arthur",
          FechaInicio: "07/14/19",
          FechaFin: "10/05/20",
          Zona: "L",
          Grupo: "Et Malesuada Industries",
          Tel: "(015259) 90094"
        },
        {
          Id: "9C7060CC-17A8-D3F7-16FC-9105C0DB7D80",
          NombreSolicitud: "348 Sed Rd.",
          Responsable: "Trevor",
          FechaInicio: "06/02/20",
          FechaFin: "03/14/19",
          Zona: "MG",
          Grupo: "Metus Sit Amet LLC",
          Tel: "055 8499 8766"
        },
        {
          Id: "987681F3-2279-2416-1E09-507CDB39B7E9",
          NombreSolicitud: "5911 Turpis. Rd.",
          Responsable: "Camilla",
          FechaInicio: "05/04/20",
          FechaFin: "03/16/19",
          Zona: "AR",
          Grupo: "Hendrerit Neque In Ltd",
          Tel: "0973 192 8574"
        },
        {
          Id: "18991C5A-1148-7122-32D3-D09AB78299B9",
          NombreSolicitud: "330-8611 Magna, St.",
          Responsable: "Shaeleigh",
          FechaInicio: "12/22/19",
          FechaFin: "03/18/20",
          Zona: "Ontario",
          Grupo: "Sed Associates",
          Tel: "0885 178 5125"
        },
        {
          Id: "C415AF16-D50A-3CD4-86C4-F2CF53A0CC34",
          NombreSolicitud: "9504 Ornare Street",
          Responsable: "Drew",
          FechaInicio: "08/16/19",
          FechaFin: "02/20/21",
          Zona: "Zuid Holland",
          Grupo: "Nulla Integer Corp.",
          Tel: "07907 277893"
        },
        {
          Id: "6B44DB48-5D2B-7230-B19B-6429E154D7EB",
          NombreSolicitud: "665-4539 Lacinia St.",
          Responsable: "Florence",
          FechaInicio: "01/19/20",
          FechaFin: "10/21/20",
          Zona: "Gelderland",
          Grupo: "Enim Foundation",
          Tel: "0800 1111"
        },
        {
          Id: "E90819E2-9C48-1469-1080-94A907E5C4E3",
          NombreSolicitud: "P.O. Box 415, 2130 Ultricies Street",
          Responsable: "Althea",
          FechaInicio: "10/04/20",
          FechaFin: "01/31/20",
          Zona: "M",
          Grupo: "Fusce Mi Lorem LLP",
          Tel: "0800 082 8405"
        },
        {
          Id: "CDDB8142-8C5A-9634-10AA-8E648FE4A1F9",
          NombreSolicitud: "261-2613 Cubilia St.",
          Responsable: "Abel",
          FechaInicio: "10/21/19",
          FechaFin: "02/20/20",
          Zona: "Punjab",
          Grupo: "Orci Limited",
          Tel: "(013621) 96673"
        },
        {
          Id: "2E9B8542-AD97-9991-CFF2-65671B66BD02",
          NombreSolicitud: "196-3883 Dui Rd.",
          Responsable: "Calista",
          FechaInicio: "08/16/20",
          FechaFin: "10/11/19",
          Zona: "VB",
          Grupo: "Pellentesque LLC",
          Tel: "07074 179261"
        },
        {
          Id: "AEC78711-DD1D-ED0A-9B48-287AB089F10A",
          NombreSolicitud: "Ap #467-6344 Luctus Street",
          Responsable: "Jessamine",
          FechaInicio: "08/24/20",
          FechaFin: "05/14/19",
          Zona: "ID",
          Grupo: "Morbi Foundation",
          Tel: "(016977) 0569"
        },
        {
          Id: "83DBE094-D060-06F9-DD76-166E45F11807",
          NombreSolicitud: "551-6153 Sociis Road",
          Responsable: "Karleigh",
          FechaInicio: "05/11/19",
          FechaFin: "09/04/20",
          Zona: "SK",
          Grupo: "Rutrum Lorem Ac Incorporated",
          Tel: "07624 545735"
        },
        {
          Id: "F5DDC1A5-9723-76AD-F81E-2F683F459A89",
          NombreSolicitud: "P.O. Box 357, 989 Lorem Rd.",
          Responsable: "Cailin",
          FechaInicio: "01/02/20",
          FechaFin: "06/13/20",
          Zona: "JUN",
          Grupo: "Sed Company",
          Tel: "0800 1111"
        },
        {
          Id: "6B183E64-FE7B-DE0F-33FC-F2550F967556",
          NombreSolicitud: "Ap #792-6016 Magna Ave",
          Responsable: "Madeson",
          FechaInicio: "03/18/20",
          FechaFin: "09/20/20",
          Zona: "Rostov Oblast",
          Grupo: "Eu Ultrices Sit LLP",
          Tel: "0370 862 4266"
        },
        {
          Id: "18CB4561-6EFE-D8AC-49BE-AFBBED11FD3E",
          NombreSolicitud: "8987 A, Street",
          Responsable: "Brooke",
          FechaInicio: "10/23/20",
          FechaFin: "02/12/20",
          Zona: "Goiás",
          Grupo: "Purus Institute",
          Tel: "0500 840565"
        },
        {
          Id: "0FB8B8A9-33BD-DC9B-7093-137B24CD07BA",
          NombreSolicitud: "810-745 Dui. Ave",
          Responsable: "Amena",
          FechaInicio: "04/18/19",
          FechaFin: "04/05/20",
          Zona: "Brussels Hoofdstedelijk Gewest",
          Grupo: "Nec Foundation",
          Tel: "(0110) 453 2098"
        },
        {
          Id: "3FE77C0A-34B7-80DE-61DA-040A3F229E0B",
          NombreSolicitud: "P.O. Box 354, 6128 Odio Rd.",
          Responsable: "Gray",
          FechaInicio: "07/14/20",
          FechaFin: "10/06/20",
          Zona: "L.",
          Grupo: "Tristique Aliquet Phasellus Foundation",
          Tel: "0800 932326"
        },
        {
          Id: "F2CD5DA1-D6CF-30C2-2AE2-B3C19432A696",
          NombreSolicitud: "423-8121 Consequat, Road",
          Responsable: "Aline",
          FechaInicio: "05/27/19",
          FechaFin: "02/01/20",
          Zona: "JI",
          Grupo: "Quam A Felis Foundation",
          Tel: "0845 46 48"
        },
        {
          Id: "E0F2BF77-61EA-7EB6-AA7E-E495D8D9C2A1",
          NombreSolicitud: "573-5593 Ligula. Street",
          Responsable: "Daria",
          FechaInicio: "12/07/19",
          FechaFin: "01/12/20",
          Zona: "South Gyeongsang",
          Grupo: "Mauris Consulting",
          Tel: "07450 054667"
        },
        {
          Id: "DA672CB7-89C4-082F-3881-4E3929E0E2DF",
          NombreSolicitud: "Ap #777-4631 Tristique Av.",
          Responsable: "Cassandra",
          FechaInicio: "08/21/20",
          FechaFin: "03/15/20",
          Zona: "LAZ",
          Grupo: "Inceptos Institute",
          Tel: "(01085) 59353"
        },
        {
          Id: "04D527CC-8864-9633-197A-C9F249696822",
          NombreSolicitud: "9213 Neque St.",
          Responsable: "Nichole",
          FechaInicio: "03/26/20",
          FechaFin: "04/05/20",
          Zona: "JB",
          Grupo: "Dapibus Quam Associates",
          Tel: "0800 087 0082"
        },
        {
          Id: "C0C58457-EA45-FDFC-C1F6-4B15972AC481",
          NombreSolicitud: "P.O. Box 482, 3811 Ornare Street",
          Responsable: "Craig",
          FechaInicio: "11/27/19",
          FechaFin: "04/12/19",
          Zona: "Los Lagos",
          Grupo: "Nunc Institute",
          Tel: "0800 1111"
        },
        {
          Id: "C528BDEA-CB1D-0BDC-B723-4F6F2A5FF11F",
          NombreSolicitud: "P.O. Box 957, 4847 Risus. Avenue",
          Responsable: "Ira",
          FechaInicio: "07/28/20",
          FechaFin: "02/09/20",
          Zona: "Pue",
          Grupo: "Non Nisi PC",
          Tel: "0800 857525"
        },
        {
          Id: "35088D45-5063-5EF5-94A7-6BDA9F83F960",
          NombreSolicitud: "P.O. Box 424, 5111 Pretium Ave",
          Responsable: "Aurelia",
          FechaInicio: "02/04/21",
          FechaFin: "01/31/21",
          Zona: "Berlin",
          Grupo: "Nibh Corp.",
          Tel: "0800 1111"
        },
        {
          Id: "B1F437EF-297A-0B96-D5EB-ECB2A28831ED",
          NombreSolicitud: "Ap #434-9703 Nonummy Rd.",
          Responsable: "Lacota",
          FechaInicio: "08/25/19",
          FechaFin: "03/28/19",
          Zona: "VI",
          Grupo: "Scelerisque Consulting",
          Tel: "(01967) 66166"
        },
        {
          Id: "13E0BEC6-1509-5CEA-322A-0879FC27F6E0",
          NombreSolicitud: "6079 Magna. Av.",
          Responsable: "Chaim",
          FechaInicio: "01/16/21",
          FechaFin: "06/07/20",
          Zona: "San José",
          Grupo: "Orci Quis Foundation",
          Tel: "07931 049856"
        },
        {
          Id: "E16591DB-1388-E1EF-C5F7-550FA52D550A",
          NombreSolicitud: "P.O. Box 680, 295 Lectus Rd.",
          Responsable: "Barclay",
          FechaInicio: "10/20/19",
          FechaFin: "01/25/20",
          Zona: "Punjab",
          Grupo: "Malesuada Ut Sem LLC",
          Tel: "0800 1111"
        },
        {
          Id: "9E8F1811-70C8-CD9D-CB58-046CD2D5EA31",
          NombreSolicitud: "893-2383 Sed Rd.",
          Responsable: "Priscilla",
          FechaInicio: "02/25/20",
          FechaFin: "11/23/19",
          Zona: "Punjab",
          Grupo: "Est Associates",
          Tel: "(017484) 19819"
        },
        {
          Id: "0A6AB70A-CAE2-CEA2-E849-947A5DCA79BA",
          NombreSolicitud: "9868 Enim, Av.",
          Responsable: "John",
          FechaInicio: "09/04/19",
          FechaFin: "05/21/19",
          Zona: "L",
          Grupo: "Donec Tempus Associates",
          Tel: "(0161) 771 9673"
        },
        {
          Id: "993ABE6D-4674-929D-DF94-851B7BF71A05",
          NombreSolicitud: "Ap #466-7929 Nibh. Street",
          Responsable: "Josephine",
          FechaInicio: "11/19/20",
          FechaFin: "04/11/19",
          Zona: "Ontario",
          Grupo: "Metus PC",
          Tel: "(01381) 050267"
        },
        {
          Id: "CEEBFFAD-4A60-72BB-D474-488BFCDEA289",
          NombreSolicitud: "292-9734 Ante Road",
          Responsable: "Abel",
          FechaInicio: "02/06/20",
          FechaFin: "10/04/19",
          Zona: "QC",
          Grupo: "Praesent Inc.",
          Tel: "(01842) 483026"
        },
        {
          Id: "54EF14BB-474B-05B4-2134-1F614AFF2B48",
          NombreSolicitud: "576-4538 Libero Rd.",
          Responsable: "Harriet",
          FechaInicio: "11/25/19",
          FechaFin: "04/25/19",
          Zona: "SJ",
          Grupo: "Pede Nec Ante Institute",
          Tel: "070 0871 9286"
        },
        {
          Id: "BAF811A1-418A-E87A-2A03-E99F98AD6637",
          NombreSolicitud: "596-2328 Mi. Ave",
          Responsable: "Naida",
          FechaInicio: "04/15/19",
          FechaFin: "11/20/20",
          Zona: "ON",
          Grupo: "Non Bibendum Sed LLC",
          Tel: "055 1304 8012"
        },
        {
          Id: "3AC88779-6CDC-17EB-BA52-1148BDAD6610",
          NombreSolicitud: "Ap #168-7298 Eu Avenue",
          Responsable: "Moana",
          FechaInicio: "06/04/20",
          FechaFin: "06/22/19",
          Zona: "Wie",
          Grupo: "Elit Sed Corporation",
          Tel: "(01258) 793113"
        },
        {
          Id: "EDB56F55-D32F-4E3E-9F46-1DFB9558B33F",
          NombreSolicitud: "7662 Morbi Ave",
          Responsable: "Larissa",
          FechaInicio: "12/23/20",
          FechaFin: "10/12/19",
          Zona: "Konya",
          Grupo: "Pharetra Institute",
          Tel: "(01106) 91966"
        },
        {
          Id: "0201A5FA-1087-63D5-7DC1-6044BA304D85",
          NombreSolicitud: "Ap #151-8018 Et Av.",
          Responsable: "Emerald",
          FechaInicio: "03/28/20",
          FechaFin: "08/03/19",
          Zona: "Kujawsko-pomorskie",
          Grupo: "Vitae Velit Corp.",
          Tel: "07227 615255"
        },
        {
          Id: "4D7C3F7B-7001-13DA-DFF6-80271475D040",
          NombreSolicitud: "1864 Tempor St.",
          Responsable: "Ross",
          FechaInicio: "09/17/20",
          FechaFin: "03/29/20",
          Zona: "Chu",
          Grupo: "Ac Consulting",
          Tel: "0800 065 1832"
        },
        {
          Id: "F478D771-7EA8-42D8-A3CA-508043F5E464",
          NombreSolicitud: "P.O. Box 472, 2024 In Street",
          Responsable: "Talon",
          FechaInicio: "07/29/20",
          FechaFin: "10/10/20",
          Zona: "Stockholms län",
          Grupo: "Gravida Sit Amet LLP",
          Tel: "(0111) 344 2774"
        },
        {
          Id: "57A2FE95-6108-D01E-8B76-8C874E3CD436",
          NombreSolicitud: "2402 Fames Rd.",
          Responsable: "Yeo",
          FechaInicio: "07/27/19",
          FechaFin: "06/06/20",
          Zona: "PIU",
          Grupo: "Dictum Ultricies Ligula LLC",
          Tel: "070 6259 5306"
        },
        {
          Id: "72FAD43D-CA1C-4B14-97EA-8F62B05E40BA",
          NombreSolicitud: "547-4345 Torquent Street",
          Responsable: "Noah",
          FechaInicio: "09/27/20",
          FechaFin: "12/27/20",
          Zona: "SB",
          Grupo: "Enim Etiam Ltd",
          Tel: "07328 060027"
        },
        {
          Id: "0C37EF21-9C1B-4200-EAEC-EC421E285DE1",
          NombreSolicitud: "P.O. Box 936, 1146 Nunc St.",
          Responsable: "Ralph",
          FechaInicio: "02/11/21",
          FechaFin: "06/21/20",
          Zona: "North Island",
          Grupo: "Lorem Tristique Associates",
          Tel: "0800 424 3952"
        },
        {
          Id: "85BD1C11-1524-0E9C-7409-772A0E1CA6B6",
          NombreSolicitud: "1408 Lacus. Road",
          Responsable: "Holmes",
          FechaInicio: "10/27/19",
          FechaFin: "08/19/20",
          Zona: "La Libertad",
          Grupo: "Sociosqu Consulting",
          Tel: "(010011) 98671"
        },
        {
          Id: "88C7A264-17A2-5F02-B094-FFC504D83A4F",
          NombreSolicitud: "8055 Nisi. St.",
          Responsable: "Mufutau",
          FechaInicio: "12/06/20",
          FechaFin: "04/08/20",
          Zona: "CDM",
          Grupo: "Metus Company",
          Tel: "0800 731 8002"
        },
        {
          Id: "C7BBE7C7-A19C-5734-0945-1105DCDD4F7A",
          NombreSolicitud: "905-7239 Gravida St.",
          Responsable: "Alexandra",
          FechaInicio: "05/21/20",
          FechaFin: "02/27/20",
          Zona: "IM",
          Grupo: "Ac Mattis Ornare Corporation",
          Tel: "0856 512 7268"
        },
        {
          Id: "320E34DD-FCB4-3916-DD0F-9131A8BCA596",
          NombreSolicitud: "Ap #542-4167 Lacus St.",
          Responsable: "Gemma",
          FechaInicio: "06/04/19",
          FechaFin: "07/02/20",
          Zona: "Massachusetts",
          Grupo: "A Sollicitudin PC",
          Tel: "(025) 4848 5907"
        },
        {
          Id: "38734420-4A9E-A718-2AC4-E696CDBD09AB",
          NombreSolicitud: "P.O. Box 538, 7434 Aliquam Road",
          Responsable: "Rama",
          FechaInicio: "08/23/19",
          FechaFin: "01/17/21",
          Zona: "NI",
          Grupo: "Nulla Ante PC",
          Tel: "056 3248 1781"
        },
        {
          Id: "9383D032-EE09-8F74-DFF3-E2BD7F94C94E",
          NombreSolicitud: "6784 Dignissim St.",
          Responsable: "Eliana",
          FechaInicio: "04/14/19",
          FechaFin: "12/07/20",
          Zona: "JT",
          Grupo: "Id Risus Quis LLP",
          Tel: "(027) 2251 1547"
        },
        {
          Id: "93814747-C998-9CA5-61B9-2286BA125340",
          NombreSolicitud: "Ap #595-3024 Purus Road",
          Responsable: "Carson",
          FechaInicio: "09/27/19",
          FechaFin: "12/10/19",
          Zona: "Sindh",
          Grupo: "Arcu Vestibulum Ante Company",
          Tel: "0814 626 8951"
        },
        {
          Id: "FA15C997-3572-6470-8C4D-8FB715146B8F",
          NombreSolicitud: "913 Mauris Rd.",
          Responsable: "Cooper",
          FechaInicio: "06/25/19",
          FechaFin: "07/17/20",
          Zona: "Balıkesir",
          Grupo: "Non Institute",
          Tel: "0334 775 7448"
        },
        {
          Id: "F584AFD1-9671-7923-1325-7A485DF18F47",
          NombreSolicitud: "P.O. Box 103, 4602 Adipiscing, Avenue",
          Responsable: "Urielle",
          FechaInicio: "01/12/20",
          FechaFin: "08/29/20",
          Zona: "Vienna",
          Grupo: "Aenean Associates",
          Tel: "0800 1111"
        },
        {
          Id: "23078B1C-B1D0-DED3-4043-35D5C62297AB",
          NombreSolicitud: "974-2036 Pede. Rd.",
          Responsable: "Quincy",
          FechaInicio: "05/16/20",
          FechaFin: "02/08/20",
          Zona: "CA",
          Grupo: "Amet Company",
          Tel: "0800 833 0150"
        },
        {
          Id: "2F30084B-4D18-A7B4-F7AD-1089A7F09171",
          NombreSolicitud: "7639 Et, Av.",
          Responsable: "Aristotle",
          FechaInicio: "09/04/20",
          FechaFin: "01/08/21",
          Zona: "Veneto",
          Grupo: "Nisi Nibh Lacinia Industries",
          Tel: "0500 551498"
        },
        {
          Id: "0D222203-6906-76A7-3230-1A36CA4A7800",
          NombreSolicitud: "Ap #426-6853 Est. Ave",
          Responsable: "Oscar",
          FechaInicio: "09/05/20",
          FechaFin: "11/22/19",
          Zona: "Vienna",
          Grupo: "Cum Sociis Incorporated",
          Tel: "0500 851722"
        },
        {
          Id: "19CDC3EE-9640-AE0F-BE2B-2E005B20BB04",
          NombreSolicitud: "7051 Libero. Rd.",
          Responsable: "Hyacinth",
          FechaInicio: "10/31/19",
          FechaFin: "01/25/20",
          Zona: "SJ",
          Grupo: "Ultrices A Foundation",
          Tel: "(023) 0327 8148"
        },
        {
          Id: "6DA2C0CC-B081-2ED0-7F67-01093059F503",
          NombreSolicitud: "Ap #785-9723 Laoreet St.",
          Responsable: "Charity",
          FechaInicio: "01/12/20",
          FechaFin: "12/26/19",
          Zona: "Campania",
          Grupo: "Molestie Orci Corp.",
          Tel: "(0171) 365 6499"
        },
        {
          Id: "86BD7FBC-419F-3A5C-81B4-09E215B49470",
          NombreSolicitud: "6597 Lorem Road",
          Responsable: "Anastasia",
          FechaInicio: "05/04/19",
          FechaFin: "02/12/21",
          Zona: "RM",
          Grupo: "Proin Limited",
          Tel: "0800 1111"
        },
        {
          Id: "7C671C63-BCCE-0F4D-9B15-A32AE37B28B7",
          NombreSolicitud: "Ap #214-7210 Arcu. St.",
          Responsable: "Velma",
          FechaInicio: "08/23/19",
          FechaFin: "11/05/19",
          Zona: "WB",
          Grupo: "Per Inceptos Inc.",
          Tel: "(013367) 33305"
        },
        {
          Id: "62CCA8F8-D5A9-C312-C3F8-5660CF9A4FE3",
          NombreSolicitud: "P.O. Box 394, 7265 Amet, St.",
          Responsable: "Dacey",
          FechaInicio: "12/15/19",
          FechaFin: "07/08/20",
          Zona: "Tennessee",
          Grupo: "Rutrum LLP",
          Tel: "(0114) 830 3110"
        },
        {
          Id: "7278E54E-FB83-7FFE-9C04-0705DFEEF7B9",
          NombreSolicitud: "3033 Felis St.",
          Responsable: "Craig",
          FechaInicio: "05/20/19",
          FechaFin: "12/10/19",
          Zona: "Vienna",
          Grupo: "Aliquam LLP",
          Tel: "056 8124 9843"
        },
        {
          Id: "9DB2A28F-562D-23D5-4543-C4DCABFD568C",
          NombreSolicitud: "Ap #653-6301 Enim Rd.",
          Responsable: "Idola",
          FechaInicio: "11/06/20",
          FechaFin: "04/24/19",
          Zona: "Chi",
          Grupo: "Bibendum LLC",
          Tel: "(019227) 74211"
        },
        {
          Id: "C3E31E03-527E-D112-D585-21882E39DBB4",
          NombreSolicitud: "255-3639 Lacus. St.",
          Responsable: "Brenna",
          FechaInicio: "08/08/19",
          FechaFin: "09/14/20",
          Zona: "Gyeonggi",
          Grupo: "Aliquet Metus Urna LLP",
          Tel: "(012468) 48036"
        },
        {
          Id: "D07088A8-6AE7-3766-9804-A9E74EA90A46",
          NombreSolicitud: "836-8627 Massa. Rd.",
          Responsable: "Cecilia",
          FechaInicio: "05/26/19",
          FechaFin: "02/03/20",
          Zona: "Washington",
          Grupo: "Ut Industries",
          Tel: "(01741) 911631"
        },
        {
          Id: "3450E2D3-DE69-D958-B86D-BAB2935D0778",
          NombreSolicitud: "413-9709 At, Av.",
          Responsable: "Jerome",
          FechaInicio: "09/02/19",
          FechaFin: "06/04/19",
          Zona: "Abruzzo",
          Grupo: "Mauris Rhoncus Id Foundation",
          Tel: "0940 816 5043"
        },
        {
          Id: "709D4669-E8C8-4DF5-279C-B6F2A7427D9E",
          NombreSolicitud: "Ap #224-9673 Cursus. Rd.",
          Responsable: "Fallon",
          FechaInicio: "08/15/19",
          FechaFin: "10/18/19",
          Zona: "Quebec",
          Grupo: "Cras Sed Corp.",
          Tel: "(0181) 741 6679"
        },
        {
          Id: "C19B59C1-AB94-EB67-EF74-955698570558",
          NombreSolicitud: "697 Gravida Rd.",
          Responsable: "Quon",
          FechaInicio: "10/02/19",
          FechaFin: "05/21/20",
          Zona: "Vorarlberg",
          Grupo: "Mauris Integer Company",
          Tel: "(01249) 35742"
        },
        {
          Id: "751C37FF-CDC5-338C-A790-470D5D10F0B4",
          NombreSolicitud: "Ap #844-5818 Dui. Road",
          Responsable: "Teagan",
          FechaInicio: "06/05/19",
          FechaFin: "01/28/21",
          Zona: "AB",
          Grupo: "Eros Non Enim Ltd",
          Tel: "0800 441 5908"
        },
        {
          Id: "DDAE0CB6-9361-2BC4-39B4-BCC538EDB8BE",
          NombreSolicitud: "591-2451 Ut Ave",
          Responsable: "Sybil",
          FechaInicio: "11/29/20",
          FechaFin: "06/22/20",
          Zona: "North Chungcheong",
          Grupo: "Molestie Institute",
          Tel: "(025) 7152 5884"
        },
        {
          Id: "16FC1C36-1078-E7C8-C788-55FFAC3A52B5",
          NombreSolicitud: "3373 Velit. Road",
          Responsable: "Colette",
          FechaInicio: "03/26/20",
          FechaFin: "11/24/20",
          Zona: "Berlin",
          Grupo: "Mauris Corp.",
          Tel: "0329 485 3992"
        },
        {
          Id: "5BCA64FD-D651-125C-38CA-72D30355606C",
          NombreSolicitud: "Ap #368-8310 Mauris Ave",
          Responsable: "Sybil",
          FechaInicio: "12/07/19",
          FechaFin: "09/21/20",
          Zona: "Gye",
          Grupo: "Sodales Mauris Blandit Ltd",
          Tel: "(01824) 01249"
        },
        {
          Id: "7C512B83-F200-68FA-0730-7F0401CF3080",
          NombreSolicitud: "P.O. Box 535, 8357 Consectetuer St.",
          Responsable: "Xaviera",
          FechaInicio: "03/28/19",
          FechaFin: "09/12/19",
          Zona: "Kayseri",
          Grupo: "Bibendum Institute",
          Tel: "(016977) 2802"
        }
      ],
      names: ["FechaInicio", "FechaFin", "Zona", "Tel"]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
