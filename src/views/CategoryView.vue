<!-- @format -->

<template>
  <div>
    <Navbar />
    <Header />

    <div class="card-container">
      <Card
        v-for="store in filteredStores"
        :key="store.name"
        :category="store.name"
        :images="store.images"
        :businessLink="store.link"
        :hours="store.hours"
        :location="store.location"
      />
    </div>

    <MallMapCarousal />
  </div>
</template>

<script>
  import Navbar from "../components/NavbarComp.vue";
  import Header from "../components/HeaderComp.vue";
  import Card from "../components/CardComp.vue";

  // Import all the images
  import MallMapCarousal from "../components/MallMapCarousal.vue";

  import mall1 from "../assets/mall1.jpg";
  import mall2 from "../assets/mall2.jpg";
  import fashion1 from "../assets/fashion1.jpg";
  import fashion2 from "../assets/fashion2.jpg";

  import beauty1 from "../assets/beauty1.jpg";
  import beauty2 from "../assets/beauty2.jpg";
  import dining1 from "../assets/dining1.jpg";
  import dining2 from "../assets/dining2.jpg";
  import event1 from "../assets/event1.jpg";
  import event2 from "../assets/event2.jpg";
  import entertainment1 from "../assets/entertainment1.jpg";
  import entertainment2 from "../assets/entertainment2.jpg";
  import service1 from "../assets/service1.jpg";
  import service2 from "../assets/service2.jpg";
  import optics1 from "../assets/optics1.jpg";
  import optics2 from "../assets/optics2.jpg";
  import optics3 from "../assets/optics3.jpg";

  import pet1 from "../assets/pet1.jpg";
  import pet2 from "../assets/pet2.jpg";
  import speciality1 from "../assets/speciality1.jpg";
  import speciality2 from "../assets/speciality2.jpg";
  import speciality from "../assets/speciality3.jpg";
  import supermarket2 from "../assets/supermarket2.jpg";
  import supermarket3 from "../assets/supermarket3.jpg";
  import supply1 from "../assets/supply1.jpg";
  import supply2 from "../assets/supply2.jpg";
  import supply3 from "../assets/supply3.jpg";
  import audio1 from "../assets/audio1.jpg";
  import audio2 from "../assets/audio2.jpg";
  import bank1 from "../assets/bank1.jpg";
  import bank2 from "../assets/bank2.jpg";
  import vid from "../assets/vid.mp4";
  import activity1 from "../assets/activity1.jpg";
  import activity2 from "../assets/activity2.jpg";
  import interior1 from "../assets/interior1.jpg";
  import interior2 from "../assets/interior2.jpg";
  import jewellery1 from "../assets/jewellery1.jpg";
  import jewellery2 from "../assets/jewellery2.jpg";
  import liquor from "../assets/liquor.jpg";
  import toy1 from "../assets/toy1.jpg";
  import toy2 from "../assets/toy2.jpg";
  import pharmacy1 from "../assets/pharmacy1.jpg";
  import pharmacy2 from "../assets//pharmacy2.jpg";

  export default {
    name: "CategoryView",
    components: { Navbar, Header, Card, MallMapCarousal },
    data() {
      return {
        categories: {
          Electronics: [
            {
              name: "Cell C",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop F180",
              link: "https://fashion-store1.com",
              images: [audio1, audio2],
            },
            {
              name: "Cell World",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G264",
              link: "https://fashion-store2.com",
              images: [audio1, audio2],
            },
            {
              name: "Computer Mania",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G54",
              link: "https://fashion-store1.com",
              images: [audio1, audio2],
            },
            {
              name: "Fuji Image Centre",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G14",
              link: "https://fashion-store2.com",
              images: [audio1, audio2],
            },
            {
              name: "Gadget Time",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G122",
              link: "https://fashion-store2.com",
              images: [audio1, audio2],
            },
            {
              name: "Incredible Connection",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G34",
              link: "https://fashion-store1.com",
              images: [audio1, audio2],
            },
            {
              name: "MTN",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G136",
              link: "https://fashion-store2.com",
              images: [audio1, audio2],
            },
            {
              name: "Pep Cell",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G258",
              link: "https://fashion-store1.com",
              images: [audio1, audio2],
            },
            {
              name: "Telkom",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G254",
              link: "https://fashion-store2.com",
              images: [audio1, audio2],
            },
            {
              name: "Vodacom",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              loaction: "Ground Floor - Shop G26",
              link: "https://fashion-store2.com",
              images: [audio1, audio2],
            },
          ],
          Finance: [
            {
              name: "African Bank",
              hours:
                "Mon - Fri: 8:30am - 5pm Sat: 9am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G16",
              link: "https://fashion-store1.com",

              images: [bank1, bank2],
            },
            {
              name: "Capitec Bank",
              hours:
                "Mon - Fri: 9am - 6pm Sat: 8am - 1pm Sun & Public Holidays: 8am - 1pm",
              location: "Ground Floor - Shop G82",
              link: "https://fashion-store2.com",
              images: [bank1, bank2],
            },
            {
              name: "FNB",
              hours:
                "Mon - Fri: 8:30am - 5pm Sat: 9am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G18",
              link: "https://fashion-store1.com",
              images: [bank1, bank2],
            },
            {
              name: "Nedbank",
              hours:
                "Mon - Fri: 9am - 4pm Sat: 8:30am - 12pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G22",
              link: "https://fashion-store2.com",
              images: [bank1, bank2],
            },
            {
              name: "Standard Bank",
              hours:
                "Mon - Fri: 9am - 4pm Sat: 8:30am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G20",
              link: "https://fashion-store2.com",
              images: [bank1, bank2],
            },
          ],
          Supplies: [
            {
              name: "Bargain Books",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G28",
              link: "https://fashion-store1.com",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Cardies",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G98",
              link: "https://fashion-store2.com",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Cum Books",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G128",
              link: "https://fashion-store1.com",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Gift Emporium",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F189",
              link: "https://fashion-store2.com",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Typo",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G134",
              link: "https://fashion-store2.com",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Yokico",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G132",
              link: "https://fashion-store2.com",
              images: [supply1, supply2, supply3],
            },
          ],
          Liquor: [
            {
              name: "Checkers Liquor",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G250",
              link: "https://fashion-store1.com",
              images: [liquor],
            },
          ],
          Entertainment: [
            {
              name: "Ster Kinekor",
              hours:
                "Mon - Fri: 10am -11pm Sat: 10am - 11pm Sun: 8am - 9pm & Public Holidays: 10am - 11pm",
              location: "First Floor - Shop F168",
              link: "https://fashion-store1.com",
              images: [entertainment1, entertainment2],
            },
          ],
          Optics: [
            {
              name: "Spec-Savers",
              hours:
                "Mon - Fri: 9am - 5:30pm Sat: 9am - 3pm Sun & Public Holidays: 9am - 3pm",
              location: "Ground Floor - Shop G30",
              link: "https://fashion-store1.com",
              images: [optics1, optics2, optics3],
            },
            {
              name: "Sunglass Hut",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm ",
              location: "First Floor - Shop F216",
              link: "https://fashion-store1.com",
              images: [optics1, optics2, optics3],
            },
            {
              name: "Torga Optical",
              hours:
                "Mon - Fri: 9am - 6pm Sat: 9am - 5pm Sun: Closed Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G262",
              link: "https://fashion-store1.com",
              images: [optics1, optics2, optics3],
            },
            {
              name: "Vision Works",
              hours:
                "Mon - Fri: 9am - 5pm Sat: 9am - 5pm Sun: Closed & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F242",
              link: "https://fashion-store1.com",
              images: [optics1, optics2, optics3],
            },
          ],
          Fashion: [
            {
              name: "Ackermans",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G40",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Ackermans Woman",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Level",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Archive",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G142",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Contempo",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F194",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Cotton On",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F192",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Cotton On Body",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F224",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "De Jagers",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F162",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Edgars",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm ",
              location: "Ground Floor - Shop G46",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Exact!",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G66",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Foschini",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Identity",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F234",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Jet",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G42",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Markham",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Miladys",
              hours:
                "Monday - Friday: 9am - 7pm Saturday: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F202",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Mr Price",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F158",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Old Khaki",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              loaction: "First Floor - Shop F240",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Pep Stores",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G68",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Pick n Pay Clothing",
              hours:
                "Monday - Friday: 9am - 7pm Saturday: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F154",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Quicksilver",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F182",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Refinery",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              loaction: "First Floor - Shop F196",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Shoe City",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G70",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Sportscene",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F201",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Tekkie Town",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G92",
              link: "https://fashion-store1.com",
              images: [fashion1, fashion2],
            },
            {
              name: "The fix",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pmSun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G90",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
            {
              name: "Truworths",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F228",
              link: "https://fashion-store2.com",
              images: [fashion1, fashion2],
            },
          ],
          Pharmacy: [
            {
              name: "Clicks",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G4",
              link: "https://fashion-store1.com",
              images: [pharmacy1, pharmacy2],
            },
            {
              name: "Dis-Chem",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F206",
              link: "https://fashion-store1.com",
              images: [pharmacy1, pharmacy2],
            },
          ],
          Care: [
            {
              name: "Clicks",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              loaction: "Ground Floor - Shop G4",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
            {
              name: "Dis-Chem",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F206",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
            {
              name: "ManiPedi",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G108",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
            {
              name: "Rain Natural Skincare",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F248",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
            {
              name: "Sorbet",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F218",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
            {
              name: "Partners Hair Design",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G107",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
            {
              name: "Edge For Men",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G32",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
            {
              name: "The Look",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G252",
              link: "https://fashion-store1.com",
              images: [beauty1, beauty2],
            },
          ],
          Specialities: [
            {
              name: "Bold Style",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun: & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F188",
              link: "https://car-store1.com",
              images: [speciality1, speciality2],
            },
            {
              name: "Frasers",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F244",
              link: "https://car-store2.com",
              images: [speciality1, speciality2],
            },
            {
              name: "King Cake",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G76",
              link: "https://car-store1.com",
              images: [speciality1, speciality2],
            },
            {
              name: "Mercedes-Benz",
              hours:
                "Mon - Fri: 7am - 5pm Sat: 9am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor",
              link: "https://car-store2.com",
              images: [speciality1, speciality2],
            },
            {
              name: "PNS",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G106",
              link: "https://car-store2.com",
              images: [speciality1, speciality2],
            },
            {
              name: "Queen of Steel",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G64",
              link: "https://car-store1.com",
              images: [speciality1, speciality2],
            },
            {
              name: "The Cock 'n Bull",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G146",
              link: "https://car-store2.com",
              images: [speciality1, speciality2],
            },
            {
              name: "Verimark",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G8",
              link: "https://car-store2.com",
              images: [speciality1, speciality2],
            },
          ],

          Dining: [
            {
              name: "Debonairs",
              hours:
                "Mon - Thur: 10am - 8pm Fri: 10am - 9pm Sat: 10am - 9pm Sun & Public Holidays: 10am - 9pm",
              location: "First Floor - Shop F186",
              link: "https://dining-store1.com",
              images: [dining1, dining2],
            },
            {
              name: "Jakura",
              hours:
                "Mon - Fri: 10:30am - 9pm Sat: 10:30am - 9:30pm Sun & Public Holidays: 10:30am - 8:30pm",
              location: "First Floor - Shop F185",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
            {
              name: "Kauai",
              hours:
                "Mon - Fri: 10am - 8pm Sat: 9am - 8pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F187",
              link: "https://dining-store1.com",
              images: [dining1, dining2],
            },
            {
              name: "KFC",
              hours:
                "Mon - Fri: 8am - 8pm Sat: 8am - 8pm Sun & Public Holidays: 8am - 6:30pm",
              location: "Ground Floor - Shop G114",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
            {
              name: "Marcels",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G103",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
            {
              name: "Metro Pie",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G118",
              link: "https://dining-store1.com",
              images: [dining1, dining2],
            },
            {
              name: "Montagu",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G112",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
            {
              name: "Mugg & Bean",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 5pm Sun: 8am - 5pm & Public Holidays: 9am - 3/5pm",
              loaction: "First Floor - Shop F214",
              link: "https://dining-store1.com",
              images: [dining1, dining2],
            },
            {
              name: "Ocean Basket",
              hours:
                "Mon - Fri: 11am - 8pm Sat: 11am - 8pm Sun: 11am - 6pm & Public Holidays: 11am - 8pm",
              location: "First Floor - Shop F184",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
            {
              name: "Peacock Tea and Coffee",
              hours:
                "Mon - Fri: 8am - 7pm Sat: 8am - 7pm Sun & Public Holidays: 8am - 5pm",
              loaction: "Ground Floor - Shop G72",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
            {
              name: "Silver Mountain Spur",
              hours:
                "Mon - Thur: 9am - 9pm Fri: 9am - 10pm Sat: 9am - 10pm Sun: 9am - 8pm Public Holidays: 9am - 8pm",
              location: "First Floor - Shop F174",
              link: "https://dining-store1.com",
              images: [dining1, dining2],
            },
            {
              name: "Solely Namaquland Biltong",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G88",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
            {
              name: "Stellas",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G124",
              link: "https://dining-store1.com",
              images: [dining1, dining2],
            },
            {
              name: "Wimpy",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 5pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G116",
              link: "https://dining-store2.com",
              images: [dining1, dining2],
            },
          ],
          Activities: [
            {
              name: "Cape Union Mart",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F220",
              link: "https://dining-store1.com",
              images: [activity1, activity2],
            },
            {
              name: "Mr Price Sport",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F160",
              link: "https://dining-store2.com",
              images: [activity1, activity2],
            },
            {
              name: "Totalsports",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays 9am - 5pm",
              location: "Ground Floor - Shop G12",
              link: "https://dining-store1.com",
              images: [activity1, activity2],
            },
          ],
          Jewellery: [
            {
              name: "American Swiss",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://event-store1.com",
              images: [jewellery1, jewellery2],
            },
            {
              name: "Lovisa",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F204",
              link: "https://event-store2.com",
              images: [jewellery1, jewellery2],
            },
            {
              name: "Sterns",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G74",
              link: "https://event-store1.com",
              images: [jewellery1, jewellery2],
            },
          ],
          Interiors: [
            {
              name: "@home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G44",
              link: "https://legal-store1.com",
              images: [interior1, interior2],
            },
            {
              name: "House And Home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G85",
              link: "https://legal-store2.com",
              images: [interior1, interior2],
            },
            {
              name: "Jet Home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://legal-store1.com",
              images: [interior1, interior2],
            },
            {
              name: "Mr Price Home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F156",
              link: "https://legal-store2.com",
              images: [interior1, interior2],
            },
            {
              name: "Sheet Street",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G96",
              link: "https://legal-store2.com",
              images: [interior1, interior2],
            },
          ],

          Service: [
            {
              name: "Blood Donation Centre",
              hours:
                "Mon - Fri: 10am - 6pm Sat: 9am - 3pm Sun: Closed & Public Holidays: 9am - 1pm",
              location: "Ground Floor - Shop G56",
              link: "https://legal-store1.com",
              images: [service1, service2],
            },
            {
              name: "Blue Route Tailors",
              hours:
                "Mon - Fri: 9am - 5pm Sat: 9am - 3pm Sun: & Public Holidays: Closed",
              location: "Ground Floor - Shop G268",
              link: "https://legal-store2.com",
              images: [service1, service2],
            },
            {
              name: "Cobbler & Co",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G120",
              link: "https://legal-store1.com",
              images: [service1, service2],
            },
            {
              name: "Copy Express",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G266",
              link: "https://legal-store2.com",
              images: [service1, service2],
            },
            {
              name: "Flight Centre",
              hours:
                "Mon - Fri: 9am - 5:30pm Sat: 9am - 4pm Sun & Public Holidays: 9am - 1pm",
              location: "Ground Floor - Shop G110",
              link: "https://legal-store2.com",
              images: [service1, service2],
            },
            {
              name: "Hearing Aid Labs",
              hours:
                "Mon - Fri: 9am - 5pm Sat: 9am - 5pm Sun & Public Holidays: 9am - 2pm",
              location: "Ground Floor - Shop G260",
              link: "https://legal-store1.com",
              images: [service1, service2],
            },
            {
              name: "Ryan's Car Wash",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 3pm Sun & Public Holidays: 9am - 2pm",
              location: "Ground Floor - Shop P306",
              link: "https://legal-store2.com",
              images: [service1, service2],
            },
            {
              name: "The Tux Tailor",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F226",
              link: "https://legal-store1.com",
              images: [service1, service2],
            },
            {
              name: "Tiger Wheel & Tyre",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 1pm Sun: Closed & Public Holidays: 8am - 1pm",
              location: "Ground Floor",
              link: "https://legal-store2.com",
              images: [service1, service2],
            },
          ],
          Pets: [
            {
              name: "Absolute Pets",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G100",
              link: "https://legal-store1.com",
              images: [pet1, pet2],
            },
          ],
          Supermarkets: [
            {
              name: "Checkers Hyper",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G86",
              link: "https://legal-store1.com",
              images: [supermarket2, supermarket3],
            },
            {
              name: "Woolworths",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays 9am - 5pm",
              location: "Ground Level",
              link: "https://legal-store1.com",
              images: [supermarket2, supermarket3],
            },
          ],
          Toys: [
            {
              name: "The Crazy Store",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F198",
              link: "https://legal-store1.com",
              images: [toy1, toy2],
            },
            {
              name: "Tokai Arts and Crafts",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G256",
              link: "https://legal-store1.com",
              images: [toy1, toy2],
            },
            {
              name: "Toys R Us",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F150",
              link: "https://legal-store1.com",
              images: [toy1, toy2],
            },
          ],
        },
        filteredStores: [],
        openTabs: null,
      };
    },
    mounted() {
      this.updateCategoryStores();
    },
    watch: {
      "$route.params.categoryName": "updateCategoryStores",
    },
    methods: {
      updateCategoryStores() {
        const categoryName = decodeURIComponent(
          this.$route.params.categoryName
        );

        if (categoryName && this.categories[categoryName]) {
          this.filteredStores = this.categories[categoryName];
        } else {
          this.filteredStores = [];
        }
      },
      mounted() {
        this.updateCategoryStores();
      },
      watch: {
        "$route.params.categoryName": "updateCategoryStores",
      },
      methods: {
        updateCategoryStores() {
          const categoryName = decodeURIComponent(
            this.$route.params.categoryName
          );

          if (categoryName && this.categories[categoryName]) {
            this.filteredStores = this.categories[categoryName];
          } else {
            this.filteredStores = [];
          }
        },
      },
    },
  };
</script>

<style scoped>
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 1rem;
  }

  .card {
    height: 830px;
  }
</style>
