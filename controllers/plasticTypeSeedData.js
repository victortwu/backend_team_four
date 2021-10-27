const express = require('express')
const seed = express.Router()
const PlasticType = require('../models/plasticType.js')

// credit: acme plastics.com
seed.get('/', (req, res) => {
  PlasticType.create([
    {
      recycleNumber: '1',  //-------- ONE
      recycleCode: 'PETE',
      plasticName: 'polyethylene terephthalate',
      generalDescription: 'polyethylene terephthalate, also known as polyester, is a clear, strong, and lightweight plastic that is non-reactive and resistant to attack by micro-organisms.',
      canRecycle: 'Yes!',
      recycleInfoOne: 'In most areas this type of plastic is reclyclable.',
      recycleInfoTwo: 'PET or PETE can be picked up through most curbside recycle programs. Be sure to rinse and empty any food out of the plastic container. Note that bottle caps are often not recylcled as they are made from a different type of plastic than the bottle.',
      productExamples: ['soda and water bottles', 'salad dressing', 'vegetable oil', 'mouth wash'],
      recycledExamples: ['Polar fleece', 'fiber', 'tote bags', 'furniture', 'carpet', 'paneling', 'straps', 'bottles and food containers'],
      extraInfoPartOne: 'Recycling facilities are most interested in Polyethylene Terephthalate (PETE) beverage bottles. They are relatively clean and homogeneous materials, and recyclers handle enough of them to make extraction worthwhile. Secondary processors wash, melt, and repelletize them for reuse.',
      extraInfoPartTwo:  'Even as desirable PETE is to reclylering facilities, those that are sorted out of curbside streams are difficult to recycle. They are contaminated with food and grime. Not all plastics with the same name and number are actually the same: the PETE used in a takeout container is different from that used in a water bottle. For all these reasons, plastics are usually downcycled into applications with less-exacting specifications than what the virgin materials were designed for. A soda bottle doesn’t become a soda bottle again; it is made into a carpet or a fleece vest. In its next incarnation, the milk jug becomes the inner layer of a detergent bottle.',
      percentRecycled2015: 18.4,
      howToDetail: "PET or PETE can be picked up through most curbside recycling programs as long as it's been emptied and rinsed of any food. The plastic caps to your plastic bottle, since they're usually made of a different type of plastic, are ussually discarded to the trash. Check with municipality as sometimes they says you can throw caps in the recycle bin it is . There's no need to remove bottle labels because the recycling process separates them.",
      randomFactoid: 'Recycling 10 plastic bottles saves enough energy to power a laptop for more than 25 hours, according to the EPA.',
    },
    {
      recycleNumber: '2',    //-------- TWO
      recycleCode: 'HDPE',
      plasticName: 'high-density polyethylene',
      generalDescription: 'high-density polyethylene is a linear version of polyethylene, a light versatile synthetic resin made from the polymerization of ethylene.',
      canRecycle: 'Yes!',
      recycleInfoOne: 'In most areas this type of plastic is reclyclable.',
      recycleInfoTwo: 'Fortunately, HDPE plastic is easily recyclable, helping keep non-biodegradable waste out of landfills, while helping reduce plastic production by up to 50 percent! Source: https://www.acmeplastics.com/what-is-hdpe',
      productExamples: ['milk jugs', 'shampoo bottles', 'butter and yogurt tubs', 'bags inside cereal boxes', 'motor oil bottles', 'shopping bags', 'trash bags', 'household cleaners'],
      recycledExamples: ['Laundry detergent bottles', 'oil bottles', 'pens', 'recycling containers', 'floor tile', 'drainage pipe', 'lumber', 'benches', 'doghouses', 'picnic tables', 'fencing', 'shampoo bottles'],
      extraInfoPartOne: 'HDPE plastic is the stiff plastic used to make milk jugs, detergent and oil bottles, toys, and some plastic bags. HDPE is the most commonly recycled plastic and is considered one of the safest forms of plastic. It is a relatively simple and cost-effective process to recycle HDPE plastic for secondary use.',
      extraInfoPartTwo:  'HDPE plastic is very hard-wearing and does not break down under exposure to sunlight or extremes of heating or freezing. For this reason, HDPE is used to make picnic tables, plastic lumber, waste bins, park benches, bed liners for trucks and other products which require durability and weather-resistance.',
      percentRecycled2015: 10.3,
      howToDetail: "HDPE can often be picked up through most curbside recycling programs, although some allow only containers with necks. Flimsy plastics (like grocery bags and plastic wrap) usually can't be recycled, but some stores will collect and recycle them.",
      randomFactoid: 'Only 8% of discarded plastics were recycled in 2017, according to the EPA.'
    },
    {
      recycleNumber: '3',    //-------- THREE
      recycleCode: 'V',
      plasticName: 'Vinyl or polyvinyl chloride',
      generalDescription: 'Polyvinyl chloride or PVC plastic is a bit different from other plastics in that it has chlorine as one of its main ingredients. The chlorine is mixed with hydrocarbons to form a monomer called vinyl chloride. This is then polymerized to form polyvinyl chloride.',
      canRecycle: 'Probably not.',
      recycleInfoOne: 'Vinyl and PVC are rarely recycled though some other prodcuts made from plastic #3 can be recycled.',
      recycleInfoTwo: 'Due to the difficulty in recycling PCV, number 3 is rarely collected and processed in recycling facilities. When it can be recycled, a small percentage can be used to make blinders, mats, cables, flooring, speed bumps, flooring, and roadway gutters. Source: https://www.thebalancesmb.com/what-recycling-symbols-mean-4126251',
      productExamples: ['piping', 'siding', 'medical equipment', 'some clear food containers', 'detergent and shampoo bottles'],
      recycledExamples: ['Decks', 'paneling', 'mud-flaps', 'roadway gutters', 'flooring', 'cables', 'speed bumps', 'mats'],
      extraInfoPartOne: "PVC is dubbed the “poison plastic” because it contains numerous toxins which it can leach throughout its entire life cycle. Almost all products using PVC require virgin material for their construction; less than 1% of PVC material is recycled.",
      extraInfoPartTwo:  "Products made using PVC plastic are not recyclable. While some PCV products can be repurposed, PVC products should not be reused for applications with food or for children’s use.",
      percentRecycled2015: 0,
      howToDetail: "PVC and Vinyl can rarely be recycled, but it's accepted by some plastic lumber makers. If you need to dispose of either material, ask your local waste management to see if you should put it in the trash or drop it off at a collection center.",
      randomFactoid: 'According to the National Waste & Recycling Association, 25% of what ends up in recycling bins is contaminated and must be thrown out.'
    },
    {
      recycleNumber: '4',    //-------- FOUR
      recycleCode: 'LDPE',
      plasticName: 'low-density polyethylene',
      generalDescription: 'General description 4',
      canRecycle: 'No',
      recycleInfoOne: 'This type of plastic is not usually recycled',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'shopping bags, highly-resistant sacks, crushed bottles',
      recycledExamples: 'floor tiles, shipping envelopes',
      extraInfoPartOne: String,
      extraInfoPartTwo:  String,
      percentRecycled2015: Number,
      howToDetail: String,
      randomFactoid: String
    },
    {
      recycleNumber: '5',    //-------- FIVE
      recycleCode: 'PP',
      plasticName: 'polypropylene plastic',
      generalDescription: 'General description 5',
      canRecycle: 'Maybe',
      recycleInfoOne: 'Increasingly being accepted in curbside recycling programs',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'furniture, luggage, toys',
      recycledExamples: 'ketchup bottles, medicine bottles',
      extraInfoPartOne: String,
      extraInfoPartTwo:  String,
      percentRecycled2015: Number,
      howToDetail: String,
      randomFactoid: String
    },
    {
      recycleNumber: '6',    //-------- SIX
      recycleCode: 'PS',
      plasticName: 'polystyrene',
      generalDescription: 'General description 6',
      canRecycle: 'Probably not',
      recycleInfoOne: 'This type of plastic is not usually recycled',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'refrigerator trays, cosmetic bags, costume jewelry, CD cases',
      recycledExamples: 'make egg cartons, take-out containers, rulers',
      extraInfoPartOne: String,
      extraInfoPartTwo:  String,
      percentRecycled2015: Number,
      howToDetail: String,
      randomFactoid: String
    },
    {
      recycleNumber: '7',    //-------- SEVEN
      recycleCode: 'OTHER',
      plasticName: 'acrylic, polycarbonate, polylactic fibers',
      generalDescription: 'General description 7',
      canRecycle: 'Maybe',
      recycleInfoOne: 'Requires more research on your part',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'fiberglass, nylon, acrylic',
      recycledExamples: '',
      extraInfoPartOne: String,
      extraInfoPartTwo:  String,
      percentRecycled2015: Number,
      howToDetail: String,
      randomFactoid: String
    }
  ], (err, data) => {
    if(err) {
      console.error(err.message)
    }
    res.send(data)
  })
})

module.exports = seed
