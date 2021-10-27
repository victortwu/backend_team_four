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
      generalDescription: 'General description 2',
      canRecycle: 'Yes',
      recycleInfoOne: 'Most areas recycle #2',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'cleaning agents, milk, detergents, washing soap',
      recycledExamples: 'pipes, oil bottles, pens, detergent bottles',
      recycleImages: []
    },
    {
      recycleNumber: '3',    //-------- THREE
      recycleCode: 'V',
      plasticName: 'polyvinyl chloride',
      generalDescription: 'General description 3',
      canRecycle: 'No',
      recycleInfoOne: 'This type of plastic is rarely recycled',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'bubble foils, trays for sweets and fruit',
      recycledExamples: 'speed bumps, roadway gutters, cables',
      recycleImages: []
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
      recycleImages: []
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
      recycleImages: []
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
      recycleImages: []
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
      recycleImages: []
    }
  ], (err, data) => {
    if(err) {
      console.error(err.message)
    }
    res.send(data)
  })
})

module.exports = seed
