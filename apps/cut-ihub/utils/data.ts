import cattle_breeding from "../public/cattle-breeding.jpg";
import cut_printing from "../public/cut-printing.jpg";
import sanitizer_img from "../public/sanitizer.jpg";
import cut_cloth from "../public/cut_cloth.webp";
import digester from "../public/digester1.jpeg";
import cut_kleen from "../public/cut-kleen.jpg";
import cut_clo from "../public/cut-clo.jpg";
import makeba from "../public/makena.jpeg";

export const data = {
  nav_links: {
    middle: [
      { name: "home", path: "/" },
      { name: "news", path: "/news" },
      { name: "about us", path: "/about-us" },
      { name: "our team", path: "/team" },
    ],
    right: [{ name: "contact", path: "/contact" }],
  },
  site_assets: {
    logo: "../assets/logo.png",
    icon: "../assets/icon.png",
  },
  contact_info: {
    email: "ihub@cut.ac.zw",
    phone: "+263672122203",
    address: `Research Innovation and business Incubation
    Private Bag 7724 Chinhoyi`,
  },
  companies: [
    {
      name: "cut kleen",
      value: "cut-kleen",
      _id: "cut-kleen",
      image: cut_kleen,
      summary: `CUTKleen is a newsubsidiary company of CUT PlatzHoldingswhich started oprations in March 2020, mainly focusing on production of alcohol-based hand sanitiser. 
    It is responsible for production of handsanitisers, disinfectants, dishwashing liquid and bottled/mineral water.However, due to its vast experience and expertise in 
    chemical consumber products, there is no limit to its range of chemical consumer products. CUTKleen product range is strongly influenced by research and development 
    as well as periodic market analysis.CUTKleen is currently self-funded although it received seed capital from the government to kick-start.CUTKleen staff consists of 
    chemists, biologists, an engineer and general hand workers. It also gets support services from other university units like bursary, works department, production 
    engineering, central services and campus protection services.`,
      number: "067-21-27485",
      site: `https://www.cut-ihub.com/company`,
      location: `CUT Innovation hub`,
      products: [
        { name: "Sanitizers", status: "Available" },
        { name: "Disinfectant", status: "Available" },
        { name: "Dish washers", status: "Available" },
      ],
    },

    {
      name: "cut printing press",
      value: "cut-printing-press",
      _id: "cut-printing-press",

      image: cut_printing,
      summary: `CUT Printing Press is a printing and publishing business venture established in 2016 through the initiative of the School of Entrepreneurship and Business Sciences (SEBS) of Chinhoyi University of Technology. The business venture is 100% owned by the university. CUT Printing Press which started operating in March 2016, is not much of a start-up business, but has been operating at a very small and semi-inﬂuential scale. Due to the technological advancements and the ever changing needs and wants of the clients there has emerged this need to upgrade and recapitalise this organisation in order to match the required standards as well as contain costs through smoother and more effective operating methods that will increase customer satisfaction and proﬁtability. In this light we have managed to acquire some important equipment that will bring growth to the business. In addition, we have embraced the modern printing, creative and marketing world which have driven us to offer comprehensive printing, publishing and advertising services

      CUT Printing Press currently thrives on Litho Printing, which is a Printing technique that is very cost effective since it caters for voluminous jobs at a very low running cost. The business unit owns a two (2) colour Heidelberg MOZ Lithography machine as its main Printing Plant. The digital Printing Section supports the business on the other end as it caters for High Quality Colour Quick Prints. All this supported by the creativity in graphic designing, photography, Animation, Web designing, etc, sets us apart from the rest of the competitors in the market. It is our great feeling that in our local community (Mash-West) there is much potential in this business line since many players in the ﬁeld do not match the standards and quipment that we posses.`,
      number: "067-21-27485",
      site: `https://www.cut-ihub.com/company`,
      location: `Orange Grove Drive, Off Lomagundi Road Chinhoyi Zimbabwe`,
      products: [
        { name: "Books", status: "Available" },
        { name: "Banners", status: "Available" },
        { name: "Fylers", status: "Available" },
        { name: "Business Cards", status: "Available" },
      ],
    },
    {
      name: "CUTCLO",
      value: "cut-clo",
      _id: "cut-clo",

      image: cut_clo,
      summary: `(CUTCLO) is a clothing unit which   link the university and industry through research and commercialization of apparel or clothing related products. The factory operates in conjunction or parallel and augments the training component of the university. Currently the factory is operating from
      the Orange groove site. 
      
      The unit seeks to grow into a bigger enterprise as there is a market for all the products
      made. CUTCLO has managed to capture some customers locally in the Mashonaland West
      province and the continued relationships should provide a strong foundation to forge more
      business deals for the company. 
      
      The key message associated with the CUTCLO line is classy, upscale, versatile, and not
      expensive clothing. The company’s promotional plan is diverse and includes a range of
      marketing communications. The factory hopes to develop lines of clothing for men, women,
      and children catering for various seasons.`,
      number: "067-21-27485",
      site: `https://www.cut-ihub.com/company`,
      location: `Orange Grove Drive, Off Lomagundi Road Chinhoyi Zimbabwe`,
      products: [
        { name: "Work Suits", status: "Available" },
        { name: "Safari Shirts", status: "Available" },
        { name: "Track Suits", status: "Available" },
        { name: "Protective wear", status: "Available" },
        { name: "Corporate wear", status: "Available" },
        { name: "Soft furnishings", status: "Available" },
        { name: "Graduation regalia", status: "Available" },
      ],
    },
    {
      name: "Engineering Production Unit",
      value: "engineering-production-unit",
      _id: "engineering-production-unit",

      image: cut_kleen,
      summary: `The Engineering Production Unit (EPU), a strategic profit making business unit, is under Production Engineering department to deliver manufacturing and engineering services to the
      community and industry in the Mashonaland West Province and the nation at large. These
      include engineering design, welding, sheet metal work &amp; fabrication, carpentry, machine shop
      services and plastics recycling. The department has the technical and human resources capacity
      to meet a sizable portion of the demand from the industry and the community.
      The unit has been attracting more customers within CUT community which includes other
      business units in different schools and institutes, and a few customers from Chinhoyi town
      community. `,
      number: "067-21-27485",
      site: `https://www.cut-ihub.com/company`,
      location: `Orange Grove Drive, Off Lomagundi Road Chinhoyi Zimbabwe`,
      products: [
        { name: "mechanical installations", status: "Available" },
        { name: "general maintenance on farm equipment", status: "Available" },
      ],
    },
    {
      name: "Cattle Breeding Project",
      value: "cattle-breeding",
      _id: "cattle-breeding",

      image: cattle_breeding,
      summary: `The Cattle Breeding Project (CBP) is a strategic business unit of Chinhoyi University of
      Technology(CUT) involved in the provision of commercial breeding, reproduction and health
      services to small and medium scale cattle businesses in Zimbabwe. The business aims to
      ensure wide-scale and cheaper access to superior genetics by small and medium scale
      farmers who were previously disadvantaged and marginalized in this respect. The business
      is premised on the fact the country has good genetics, but breeding animals are not readily
      accessible to all farmers due to cost and the few numbers. Using novel breeding and
      reproductive technologies helps to solve the problem of inbreeding, lack of access to good
      genetics and huge cost of importing semen into the country. The business will positively
      impact the cattle industry by improving growth and reproductive performance, increase
      cattle numbers and raise farmer incomes.`,
      number: "067-21-27485",
      site: `https://www.cut-ihub.com/company`,
      location: `Orange Grove Drive, Off Lomagundi Road Chinhoyi Zimbabwe`,
      products: [
        { name: "Frozen embryos", status: "Available" },
        { name: "Embryo flushing and transfer", status: "Available" },
        { name: "Sexed semen doses", status: "Available" },
        { name: "Genetic profiling", status: "Available" },
        { name: "Parentage verification", status: "Available" },
      ],
    },
    {
      name: "cut host",
      value: "cut-host",
      _id: "cut-host",

      image: cut_kleen,
      summary: `CUTKleen is a newsubsidiary company of CUT PlatzHoldingswhich started oprations in March 2020, mainly focusing on production of alcohol-based hand sanitiser. 
    It is responsible for production of handsanitisers, disinfectants, dishwashing liquid and bottled/mineral water.However, due to its vast experience and expertise in 
    chemical consumber products, there is no limit to its range of chemical consumer products. CUTKleen product range is strongly influenced by research and development 
    as well as periodic market analysis.CUTKleen is currently self-funded although it received seed capital from the government to kick-start.CUTKleen staff consists of 
    chemists, biologists, an engineer and general hand workers. It also gets support services from other university units like bursary, works department, production 
    engineering, central services and campus protection services.`,
      number: "067-21-27485",
      site: `https://www.cut-ihub.com/company`,
      location: `Orange Grove Drive, Off Lomagundi Road Chinhoyi Zimbabwe`,
      products: [],
    },
  ],
  news_data: [
    {
      picture: sanitizer_img,
      details:
        " We have been making a lot of sanitizers lately. We are supplying in batches",
      date: "March 12, 2022",
    },
    {
      picture: digester,
      details:
        "Chinhoyi University of technology designed a biogas digester, Which is servring ay local compas",
      date: "Feb 4, 2021",
    },
    {
      picture: makeba,
      details:
        " Our student recently won UNESCO India Africa Hackerthon, won a gold medal",
      date: "March 12, 2022",
    },
    {
      picture: cut_cloth,
      details:
        "Cut Clothing, is now supplying clothes to varrying sectors in the country",
      date: "Aug 14, 2020",
    },
  ],
};
