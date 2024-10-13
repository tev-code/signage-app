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

  import fashion1 from "../assets/fashion1.jpg";
  import fashion2 from "../assets/fashion2.jpg";

  import beauty1 from "../assets/beauty1.jpg";
  import beauty2 from "../assets/beauty2.jpg";
  import dining1 from "../assets/dining1.jpg";
  import dining2 from "../assets/dining2.jpg";

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
              link: "https://www.cellc.co.za/cellc/home",
              images: [audio1, audio2],
            },
            {
              name: "Cell World",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G264",
              link: "https://sacellworld.co.za/",
              images: [audio1, audio2],
            },
            {
              name: "Computer Mania",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G54",
              link: "https://computermania.co.za/pages/computer-mania-blue-route-mall",
              images: [audio1, audio2],
            },
            {
              name: "Fuji Image Centre",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G14",
              link: "https://fujionline.co.za/",
              images: [audio1, audio2],
            },
            {
              name: "Gadget Time",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G122",
              link: "https://gadgettime.co.za/?srsltid=AfmBOopO6n5nf7SbWWVpsep1bHypXY7b8RIcadOrY9LVYwsWclu0ZlJn",
              images: [audio1, audio2],
            },
            {
              name: "Incredible Connection",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G34",
              link: "https://www.incredible.co.za/?utm_source=google&utm_medium=locations&utm_campaign=SP&utm_content=SP",
              images: [audio1, audio2],
            },
            {
              name: "MTN",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G136",
              link: "",
              images: [audio1, audio2],
            },
            {
              name: "Pep Cell",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G258",
              link: "https://www.pepstores.com/products/cell?srsltid=AfmBOooBM5kcfJqIsXz5Yux3_hDXfKx0qBCZhqQ7GncHR9ULIAtEYZPV",
              images: [audio1, audio2],
            },
            {
              name: "Telkom",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              location: "Ground Floor - Shop G254",
              link: "https://www.telkom.co.za/storelocator/details?loc=Telkom%20Blue%20Route%20Express&locationid=aee9c760-56d2-4344-9c09-f499bbff126e",
              images: [audio1, audio2],
            },
            {
              name: "Vodacom",
              hours: "Mon - Fri: 9am - 7pm Sat: 9am - 5pm",
              loaction: "Ground Floor - Shop G26",
              link: "https://www.vodacom.co.za/vodacom/shopping/store-details?loc=Vodacom%20Shop%20Blue%20Route%20Mall&locationid=87230c92-b0c0-4b70-8253-2ff60a6f6ae2&utm_source=google+search&utm_medium=google+business&utm_campaign=Vodacom+Shop+Blue+Route+Mall&utm_id=locations",
              images: [audio1, audio2],
            },
          ],
          Finance: [
            {
              name: "African Bank",
              hours:
                "Mon - Fri: 8:30am - 5pm Sat: 9am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G16",
              link: "https://www.africanbank.co.za/en/home/",

              images: [bank1, bank2],
            },
            {
              name: "Capitec Bank",
              hours:
                "Mon - Fri: 9am - 6pm Sat: 8am - 1pm Sun & Public Holidays: 8am - 1pm",
              location: "Ground Floor - Shop G82",
              link: "https://www.capitecbank.co.za/",
              images: [bank1, bank2],
            },
            {
              name: "FNB",
              hours:
                "Mon - Fri: 8:30am - 5pm Sat: 9am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G18",
              link: "https://www.fnb.co.za/",
              images: [bank1, bank2],
            },
            {
              name: "Nedbank",
              hours:
                "Mon - Fri: 9am - 4pm Sat: 8:30am - 12pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G22",
              link: "https://personal.nedbank.co.za/home.html",
              images: [bank1, bank2],
            },
            {
              name: "Standard Bank",
              hours:
                "Mon - Fri: 9am - 4pm Sat: 8:30am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor - Shop G20",
              link: "https://www.standardbank.co.za/southafrica/personal",
              images: [bank1, bank2],
            },
          ],
          Supplies: [
            {
              name: "Bargain Books",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G28",
              link: "https://www.bargainbooks.co.za/?utm_source=google_maps&utm_medium=website_button&utm_campaign=SP&utm_content=SP",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Cardies",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G98",
              link: "https://cardies.co.za/",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Cum Books",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G128",
              link: "https://cumbooks.co.za/",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Gift Emporium",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F189",
              link: "https://www.giftemporiumsa.co.za/",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Typo",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G134",
              link: "https://cottonon.com/ZA/typo-home/?gad_source=1&gclid=EAIaIQobChMI5dnq9ZyLiQMVaLVoCR0l6DQHEAAYASAAEgL78fD_BwE",
              images: [supply1, supply2, supply3],
            },
            {
              name: "Yokico",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G132",
              link: "https://yokico.co.za/",
              images: [supply1, supply2, supply3],
            },
          ],
          Liquor: [
            {
              name: "Checkers Liquor",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G250",
              link: "https://www.checkers.co.za/",
              images: [liquor],
            },
          ],
          Entertainment: [
            {
              name: "Ster Kinekor",
              hours:
                "Mon - Fri: 10am -11pm Sat: 10am - 11pm Sun: 8am - 9pm & Public Holidays: 10am - 11pm",
              location: "First Floor - Shop F168",
              link: "https://www.sterkinekor.com/",
              images: [entertainment1, entertainment2],
            },
          ],
          Optics: [
            {
              name: "Spec-Savers",
              hours:
                "Mon - Fri: 9am - 5:30pm Sat: 9am - 3pm Sun & Public Holidays: 9am - 3pm",
              location: "Ground Floor - Shop G30",
              link: "https://www.specsavers.co.za/store/blue-route?utm_source=google&utm_medium=organic&utm_campaign=GMB&utm_content=spec-savers-blue-route",
              images: [optics1, optics2, optics3],
            },
            {
              name: "Sunglass Hut",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm ",
              location: "First Floor - Shop F216",
              link: "https://za.sunglasshut.com/",
              images: [optics1, optics2, optics3],
            },
            {
              name: "Torga Optical",
              hours:
                "Mon - Fri: 9am - 6pm Sat: 9am - 5pm Sun: Closed Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G262",
              link: "https://www.torgaoptical.co.za/",
              images: [optics1, optics2, optics3],
            },
            {
              name: "Vision Works",
              hours:
                "Mon - Fri: 9am - 5pm Sat: 9am - 5pm Sun: Closed & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F242",
              link: "https://blueroutemall.co.za/stores/store-list/vision-works-optometrists/",
              images: [optics1, optics2, optics3],
            },
          ],
          Fashion: [
            {
              name: "Ackermans",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G40",
              link: "https://www.ackermans.co.za/",
              images: [fashion1, fashion2],
            },
            {
              name: "Ackermans Woman",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Level",
              link: "https://www.ackermans.co.za/",
              images: [fashion1, fashion2],
            },
            {
              name: "Archive",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G142",
              link: "https://blog.archivestore.co.za/",
              images: [fashion1, fashion2],
            },
            {
              name: "Contempo",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F194",
              link: "https://contemposhop.co.za/?srsltid=AfmBOoqeBEGHCcjkk7A6eCA6lA3uBDo5vAxP7pMV-DfeuHODOX5U3XJa",
              images: [fashion1, fashion2],
            },
            {
              name: "Cotton On",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F192",
              link: "https://cottonon.com/ZA/?srsltid=AfmBOorS-0Zhc1g0w5b_gV4utqrErDDMNL_lNnM8maKhMdHgzjm2AtOD",
              images: [fashion1, fashion2],
            },
            {
              name: "Cotton On Body",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F224",
              link: "https://cottonon.com/ZA/?utm_source=google-store-profiles&utm_medium=organic&utm_campaign=google-store-CO-ZA&utm_id=google-store-5340-COTTONON",
              images: [fashion1, fashion2],
            },
            {
              name: "De Jagers",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F162",
              link: "https://www.dejagersonline.co.za/home",
              images: [fashion1, fashion2],
            },
            {
              name: "Edgars",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm ",
              location: "Ground Floor - Shop G46",
              link: "https://www.edgars.co.za/",
              images: [fashion1, fashion2],
            },
            {
              name: "Exact!",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G66",
              link: "https://bash.com/exact?redirect=www.exact.co.za",
              images: [fashion1, fashion2],
            },
            {
              name: "Foschini",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://bash.com/foschini?redirect=www.foschini.co.za",
              images: [fashion1, fashion2],
            },
            {
              name: "Identity",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F234",
              link: "https://www.identity.co.za/",
              images: [fashion1, fashion2],
            },
            {
              name: "Jet",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G42",
              link: "https://bash.com/jet?redirect=www.jetonline.co.za",
              images: [fashion1, fashion2],
            },
            {
              name: "Markham",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://bash.com/markham?redirect=www.markham.co.za",
              images: [fashion1, fashion2],
            },
            {
              name: "Miladys",
              hours:
                "Monday - Friday: 9am - 7pm Saturday: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F202",
              link: "https://www.miladys.com/",
              images: [fashion1, fashion2],
            },
            {
              name: "Mr Price",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F158",
              link: "https://www.mrp.com/home",
              images: [fashion1, fashion2],
            },
            {
              name: "Old Khaki",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              loaction: "First Floor - Shop F240",
              link: "https://www.oldkhaki.co.za/?srsltid=AfmBOopW4xjPFw6AGX30nyP2hqSIDL9PD4tVwEUbbAdCMpl52_CA4qj9",
              images: [fashion1, fashion2],
            },
            {
              name: "Pep Stores",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G68",
              link: "https://www.pepstores.com/?utm_source=google%20&utm_medium=locations&utm_campaign=SP&utm_content=SP",
              images: [fashion1, fashion2],
            },
            {
              name: "Pick n Pay Clothing",
              hours:
                "Monday - Friday: 9am - 7pm Saturday: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F154",
              link: "https://www.picknpayclothing.co.za/",
              images: [fashion1, fashion2],
            },
            {
              name: "Quicksilver",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F182",
              link: "https://boardriders.co.za/?utm_source=google&utm_medium=google+my+business",
              images: [fashion1, fashion2],
            },
            {
              name: "Refinery",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              loaction: "First Floor - Shop F196",
              link: "https://www.refinerystore.co.za/?srsltid=AfmBOopkiTMsJomeUpa334598HhheBUASXM_sz7IVeJJo48tmhFJMYE1",
              images: [fashion1, fashion2],
            },
            {
              name: "Shoe City",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G70",
              link: "https://www.shoecity.co.za/?srsltid=AfmBOoqxkzG1lUJTigKOnC36qGJK0F3zKiixdgolroHUR0ZHU9Bx8uVv",
              images: [fashion1, fashion2],
            },
            {
              name: "Sportscene",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F201",
              link: "https://blueroutemall.co.za/stores/store-list/sportscene/",
              images: [fashion1, fashion2],
            },
            {
              name: "Tekkie Town",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G92",
              link: "https://tekkietown.co.za/?srsltid=AfmBOopvocXm1Y_o3lOrxlV5fDOXsYWXml_61BzUAXaR5ajASaTlGoqP",
              images: [fashion1, fashion2],
            },
            {
              name: "The fix",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pmSun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G90",
              link: "https://bash.com/the-fix",
              images: [fashion1, fashion2],
            },
            {
              name: "Truworths",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F228",
              link: "https://www.truworths.co.za/",
              images: [fashion1, fashion2],
            },
            {
              name: "Uniq",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G46",
              link: "https://www.uniqclothing.co.za/",
              images: [fashion1, fashion2],
            },
          ],
          Pharmacy: [
            {
              name: "Clicks",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G4",
              link: "https://www.clicks.co.za/healthcareservices",
              images: [pharmacy1, pharmacy2],
            },
            {
              name: "Dis-Chem",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F206",
              link: "https://www.dischem.co.za/blue-route-pharmacy",
              images: [pharmacy1, pharmacy2],
            },
          ],
          Care: [
            {
              name: "Clicks",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              loaction: "Ground Floor - Shop G4",
              link: "https://www.clicks.co.za/",
              images: [beauty1, beauty2],
            },
            {
              name: "Dis-Chem",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F206",
              link: "https://www.dischem.co.za/blue-route-pharmacy",
              images: [beauty1, beauty2],
            },
            {
              name: "ManiPedi",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G108",
              link: "https://www.manipedi.co.za/",
              images: [beauty1, beauty2],
            },
            {
              name: "Rain Natural Skincare",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F248",
              link: "https://shop.rainafrica.co.za/?srsltid=AfmBOoof_3O-pTUZCurr41iVBEK_USQAozDpgRD2jJKLQvpMf05AxIGr",
              images: [beauty1, beauty2],
            },
            {
              name: "Sorbet",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F218",
              link: "https://www.sorbet.co.za/",
              images: [beauty1, beauty2],
            },
            {
              name: "Partners Hair Design",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G107",
              link: "https://partnershair.co.za/",
              images: [beauty1, beauty2],
            },
            {
              name: "Edge For Men",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G32",
              link: "",
              images: [beauty1, beauty2],
            },
            {
              name: "The Look",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G252",
              link: "https://www.facebook.com/people/The-Look/61554328354340/?sk=about",
              images: [beauty1, beauty2],
            },
          ],
          Specialities: [
            {
              name: "Bold Style",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun: & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F188",
              link: "https://www.boldstyle.co.za/",
              images: [speciality1, speciality2],
            },
            {
              name: "Frasers",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F244",
              link: "https://destinations.za.com/",
              images: [speciality1, speciality2],
            },
            {
              name: "King Cake",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G76",
              link: "https://www.facebook.com/PartyCityKingCake/",
              images: [speciality1, speciality2],
            },
            {
              name: "Mercedes-Benz",
              hours:
                "Mon - Fri: 7am - 5pm Sat: 9am - 1pm Sun & Public Holidays: Closed",
              location: "Ground Floor",
              link: "https://www.mercedes-benz.co.za/",
              images: [speciality1, speciality2],
            },
            {
              name: "PNS",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G106",
              link: "https://perfectnutrition.co.za/",
              images: [speciality1, speciality2],
            },
            {
              name: "Queen of Steel",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G64",
              link: "https://queenofsteel.co.za/",
              images: [speciality1, speciality2],
            },
            {
              name: "The Cock 'n Bull",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G146",
              link: "https://www.cocknbull.co.za/",
              images: [speciality1, speciality2],
            },
            {
              name: "Verimark",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G8",
              link: "https://verimark.co.za/",
              images: [speciality1, speciality2],
            },
          ],

          Dining: [
            {
              name: "Debonairs",
              hours:
                "Mon - Thur: 10am - 8pm Fri: 10am - 9pm Sat: 10am - 9pm Sun & Public Holidays: 10am - 9pm",
              location: "First Floor - Shop F186",
              link: "https://location.debonairspizza.co.za/blue-route-mall?y_source=1_MTI0NTA4MjAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
              images: [dining1, dining2],
            },
            {
              name: "Jakura",
              hours:
                "Mon - Fri: 10:30am - 9pm Sat: 10:30am - 9:30pm Sun & Public Holidays: 10:30am - 8:30pm",
              location: "First Floor - Shop F185",
              link: "https://www.instagram.com/jakura_sushi/",
              images: [dining1, dining2],
            },
            {
              name: "Kauai",
              hours:
                "Mon - Fri: 10am - 8pm Sat: 9am - 8pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F187",
              link: "https://kauai.co.za/?utm_source=google_maps&utm_medium=website_button&utm_campaign=SP&utm_content=SP",
              images: [dining1, dining2],
            },
            {
              name: "KFC",
              hours:
                "Mon - Fri: 8am - 8pm Sat: 8am - 8pm Sun & Public Holidays: 8am - 6:30pm",
              location: "Ground Floor - Shop G114",
              link: "https://order.kfc.co.za/",
              images: [dining1, dining2],
            },
            {
              name: "Marcels",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G103",
              link: "https://www.marcels.co.za/",
              images: [dining1, dining2],
            },
            {
              name: "Metro Pie",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G118",
              link: "https://www.instagram.com/metro_pie/",
              images: [dining1, dining2],
            },
            {
              name: "Montagu",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G112",
              link: "https://www.montagusnacks.co.za/?utm_source=google_maps&utm_medium=website_button&utm_campaign=SP&utm_content=SP",
              images: [dining1, dining2],
            },
            {
              name: "Mugg & Bean",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 5pm Sun: 8am - 5pm & Public Holidays: 9am - 3/5pm",
              loaction: "First Floor - Shop F214",
              link: "https://muggandbean.co.za/our-menu/on-the-move-menu/?utm_source=yext_pages&utm_medium=referral&utm_campaign=header_link&utm_content=on_the_move_menu",
              images: [dining1, dining2],
            },
            {
              name: "Ocean Basket",
              hours:
                "Mon - Fri: 11am - 8pm Sat: 11am - 8pm Sun: 11am - 6pm & Public Holidays: 11am - 8pm",
              location: "First Floor - Shop F184",
              link: "https://oceanbasket.co.za/?utm_source=google_maps&utm_medium=website_button&utm_campaign=SP&utm_content=SP",
              images: [dining1, dining2],
            },
            {
              name: "Peacock Tea and Coffee",
              hours:
                "Mon - Fri: 8am - 7pm Sat: 8am - 7pm Sun & Public Holidays: 8am - 5pm",
              loaction: "Ground Floor - Shop G72",
              link: "https://www.peacockteaandcoffee.co.za/",
              images: [dining1, dining2],
            },
            {
              name: "Silver Mountain Spur",
              hours:
                "Mon - Thur: 9am - 9pm Fri: 9am - 10pm Sat: 9am - 10pm Sun: 9am - 8pm Public Holidays: 9am - 8pm",
              location: "First Floor - Shop F174",
              link: "https://www.spursteakranches.com/za/restaurant/western-cape/cape-town/tokai/silver-mountain-spur",
              images: [dining1, dining2],
            },
            {
              name: "Solely Namaquland Biltong",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G88",
              link: "https://www.namaqualandbiltong.co.za/",
              images: [dining1, dining2],
            },
            {
              name: "Stellas",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G124",
              link: "https://www.dining-out.co.za/md/Stellas/5134",
              images: [dining1, dining2],
            },
            {
              name: "Wimpy",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 5pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G116",
              link: "https://location.wimpy.co.za/blue-route-mall",
              images: [dining1, dining2],
            },
          ],
          Activities: [
            {
              name: "Cape Union Mart",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F220",
              link: "https://www.capeunionmart.co.za/",
              images: [activity1, activity2],
            },
            {
              name: "Mr Price Sport",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F160",
              link: "https://www.mrp.com/home",
              images: [activity1, activity2],
            },
            {
              name: "Totalsports",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays 9am - 5pm",
              location: "Ground Floor - Shop G12",
              link: "https://bash.com/totalsports?redirect=www.totalsports.co.za",
              images: [activity1, activity2],
            },
          ],
          Jewellery: [
            {
              name: "American Swiss",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://bash.com/american-swiss?redirect=www.americanswiss.co.za",
              images: [jewellery1, jewellery2],
            },
            {
              name: "Lovisa",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F204",
              link: "https://www.lovisajewellery.co.za/pages/store-locator?srsltid=AfmBOoqBh71uDpim4rk24Qtkz-HvqriU_s3vsHzao9XUFu-mwMQqkWqT",
              images: [jewellery1, jewellery2],
            },
            {
              name: "Sterns",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G74",
              link: "https://bash.com/sterns?redirect=www.sterns.co.za",
              images: [jewellery1, jewellery2],
            },
          ],
          Interiors: [
            {
              name: "@home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G44",
              link: "https://bash.com/homewarestore?redirect=www.home.co.za",
              images: [interior1, interior2],
            },
            {
              name: "House And Home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G85",
              link: "https://www.houseandhome.co.za/products",
              images: [interior1, interior2],
            },
            {
              name: "Jet Home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G138",
              link: "https://bash.com/jet?redirect=www.jetonline.co.za",
              images: [interior1, interior2],
            },
            {
              name: "Mr Price Home",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F156",
              link: "https://www.mrp.com/home",
              images: [interior1, interior2],
            },
            {
              name: "Sheet Street",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G96",
              link: "https://www.sheetstreet.com/",
              images: [interior1, interior2],
            },
          ],

          Service: [
            {
              name: "Blood Donation Centre",
              hours:
                "Mon - Fri: 10am - 6pm Sat: 9am - 3pm Sun: Closed & Public Holidays: 9am - 1pm",
              location: "Ground Floor - Shop G56",
              link: "https://www.wcbs.org.za/",
              images: [service1, service2],
            },
            {
              name: "Blue Route Tailors",
              hours:
                "Mon - Fri: 9am - 5pm Sat: 9am - 3pm Sun: & Public Holidays: Closed",
              location: "Ground Floor - Shop G268",
              link: "https://blueroutemall.co.za/stores/store-list/blue-route-tailors/",
              images: [service1, service2],
            },
            {
              name: "Cobbler & Co",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G120",
              link: "https://cobblerandco.co.za/",
              images: [service1, service2],
            },
            {
              name: "Copy Express",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G266",
              link: "https://copyexpress.co.za/",
              images: [service1, service2],
            },
            {
              name: "Flight Centre",
              hours:
                "Mon - Fri: 9am - 5:30pm Sat: 9am - 4pm Sun & Public Holidays: 9am - 1pm",
              location: "Ground Floor - Shop G110",
              link: "https://www.flightcentre.co.za/?utm_source=google&utm_medium=organic&utm_campaign=gmb_listing&utm_term=BlueRoute",
              images: [service1, service2],
            },
            {
              name: "Hearing Aid Labs",
              hours:
                "Mon - Fri: 9am - 5pm Sat: 9am - 5pm Sun & Public Holidays: 9am - 2pm",
              location: "Ground Floor - Shop G260",
              link: "https://hearingaidlabs.co.za/contact-us/#cape-town",
              images: [service1, service2],
            },
            {
              name: "Ryan's Car Wash",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 3pm Sun & Public Holidays: 9am - 2pm",
              location: "Ground Floor - Shop P306",
              link: "https://ryanscarwash.co.za/",
              images: [service1, service2],
            },
            {
              name: "The Tux Tailor",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F226",
              link: "https://thetuxtailor.com/",
              images: [service1, service2],
            },
            {
              name: "Tiger Wheel & Tyre",
              hours:
                "Mon - Fri: 8am - 5pm Sat: 8am - 1pm Sun: Closed & Public Holidays: 8am - 1pm",
              location: "Ground Floor",
              link: "https://www.twt.co.za/promotions/",
              images: [service1, service2],
            },
          ],
          Pets: [
            {
              name: "Absolute Pets",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G100",
              link: "https://www.absolutepets.com/",
              images: [pet1, pet2],
            },
          ],
          Supermarkets: [
            {
              name: "Checkers Hyper",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G86",
              link: "https://www.checkers.co.za/",
              images: [supermarket2, supermarket3],
            },
            {
              name: "Woolworths",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays 9am - 5pm",
              location: "Ground Level",
              link: "https://www.woolworths.co.za/",
              images: [supermarket2, supermarket3],
            },
          ],
          Toys: [
            {
              name: "The Crazy Store",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F198",
              link: "https://www.crazystore.co.za/?utm_source=local&utm_medium=organic&utm_campaign=gmb-tokai-ak",
              images: [toy1, toy2],
            },
            {
              name: "Tokai Arts and Crafts",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "Ground Floor - Shop G256",
              link: "https://blueroutemall.co.za/stores/store-list/tokai-arts-and-crafts/",
              images: [toy1, toy2],
            },
            {
              name: "Toys R Us",
              hours:
                "Mon - Fri: 9am - 7pm Sat: 9am - 7pm Sun & Public Holidays: 9am - 5pm",
              location: "First Floor - Shop F150",
              link: "https://www.toysrus.co.za/",
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
