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
      generalDescription: 'Low-density polyethylene has a high degree of branching in the molecular structure, which means that the polymer has a lower density and greater flexibility.',
      canRecycle: 'Maybe.',
      recycleInfoOne: 'Plastic #4 Is not normal recycled through standard recycling programs. However, many supermarkets collect thin plastic #4, like shopping bags and cling film.',
      recycleInfoTwo: 'Like number 3, LDPE is not usually recycled. However, contact your curbside recycle program or local recycling center to find out if they accept number 4 recycling.',
      productExamples: ['shopping bags', 'squeezable bottles', 'carpet', 'furniture', 'clothing', 'tot bags dry cleaning bags', 'frozen foods', 'bread bags'],
      recycledExamples: ['Trash can liners and cans', 'compost bins', 'shipping envelopes', 'paneling', 'lumber', 'landscaping ties', 'floor tile'],
      extraInfoPartOne: 'LDPE is considered less toxic than other plastics, and relatively safe for use. It is not commonly recycled, however, although this is changing in many communities today as more plastic recycling programs gear up to handle this material. When recycled, LDPE plastic is used for plastic lumber, landscaping boards, garbage can liners and floor tiles. Products made using recycled LDPE are not as hard or rigid as those made using recycled HDPE plastic.',
      extraInfoPartTwo:  'Most recycling centers do not accept LDPE. To recycle LDPE made items such as grocery store shopping or produce bags you need to take them to a location that accepts them Fortunately most grocers will take them.',
      percentRecycled2015: 6.2,
      howToDetail: 'LDPE is not often recycled through curbside programs, but some communities might accept it. That means anything made with LDPE (like toothpaste tubes) can be thrown in the trash. Just like we mentioned under HDPE, plastic shopping bags can often be returned to stores for recycling.',
      randomFactoid: 'Plastic accounts for roughly 12% of the total municipal solid waste in the US.'
    },
    {
      recycleNumber: '5',    //-------- FIVE
      recycleCode: 'PP',
      plasticName: 'polypropylene plastic',
      generalDescription: 'Polypropylene has a unique property in its fatigue resistance. Hinged caps that you see on your cosmetic product bottles like shampoos, lotions, hair oils etc. are made of polypropylene. In some countries currency notes are being printed out of polypropylene because they last much longer than paper currency.',
      canRecycle: 'Maybe.',
      recycleInfoOne: 'Plastic #5 Is not normal recycled through standard recycling programs, though this is changing in some location.',
      recycleInfoTwo: "PP is also rarely recycled but is accepted by some curbside recycling. Check out your municipality's website to find out if they accept number 5.",
      productExamples: ['medicine bottles', 'straws', 'bottle caps', 'ketchup' 'bottles and syrup bottles', 'some yogurt containers'],
      recycledExamples: ['Signal lights', 'battery cables', 'brooms', 'brushes', 'auto battery cases', 'ice scrapers', 'landscape borders', 'bicycle racks', 'rakes', 'bins', 'pallets', 'trays'],
      extraInfoPartOne: "Polypropylene is recyclable through some curbside recycling programs, but only about 3% of PP products are currently being recycled in the US. Recycled PP is used to make landscaping border stripping, battery cases, brooms, bins and trays. However, #5 plastic is today becoming more accepted by recyclers.",
      extraInfoPartTwo:  "PP is considered safe for reuse. To recycle products made from PP, check with your local curbside program to see if they are now accepting this material.",
      percentRecycled2015: .9,
      howToDetail: "PP can be recycled through some curbside programs, just don't forget to make sure there's no food left inside. It's best to throw loose caps into the garbage since they easily slip through screens during recycling and end up as trash anyways.",
      randomFactoid: 'Plastic takes hundreds of years to decompose'
    },
    {
      recycleNumber: '6',    //-------- SIX
      recycleCode: 'PS',
      plasticName: 'polystyrene',
      generalDescription: 'POLYSTYRENE is a thermoplastic substance created from styrene. This aromatic polymer is colorless with little flexibility in its pure, sold plastic form.',
      canRecycle: 'Probably not.',
      recycleInfoOne: 'Plastic #6 is difficult to recycle and is actually banned in some municipalities.',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: ['disposable cups and plates', 'carry-out containers', 'egg cartons', 'meat trays'],
      recycledExamples: ['insulation', 'light switch plates', 'egg cartons', 'vents', 'rulers', 'foam packing', 'carry-out containers'],
      extraInfoPartOne: "Recycling is not widely available for polystyrene products. Most curbside collection services will not accept polystyrene, which is why this material accounts for about 35% of US landfill material. While the technology for recycling polystyrene is available, the market for recycling is small.",
      extraInfoPartTwo: '',
      percentRecycled2015: 1.3,
      howToDetail: "Not many curbside recycling programs accept PS in the form of rigid plastics (and many manufacturers have switched to using PET instead). Since foam products tend to break apart into smaller pieces, you should place them in a bag, squeeze out the air, and tie it up before putting it in the trash to prevent pellets from dispersing.",
      randomFactoid: 'Only 9% of plastic is recycled, according to National Geographic.'
    },
    {
      recycleNumber: '7',    //-------- SEVEN
      recycleCode: 'OTHER',
      plasticName: 'Bisphenol A (BPA), Polycarbonate',
      generalDescription: 'The #7 category was designed as a catch-all for polycarbonate (PC) and “other” plastics.',
      canRecycle: 'Probably not.',
      recycleInfoOne: 'Plastic #7 is a catch all for plastics that do not fall into any of the other catagories. Therefore, this plastic is rarly recycled.',
      recycleInfoTwo: 'These plastics are generally not accepted by curbside recycling services. Often these plastics are destined for the landfill. However, check with your local recycling program to see if your area accepts this type and try to avoid these hard-to recycle plastic products.',
      productExamples: ['certain food containers', 'signs and displays', 'computers and electronic devices', 'DVDs', 'sunglasses', 'bulletproof materials'],
      recycledExamples: ['Plastic lumber', 'custom-made products'],
      extraInfoPartOne: 'Catagory 7 plastics was desgned as a catch all for the polycarbonates and other plastics. These plastic are typically not considered for recycling.',
      extraInfoPartTwo:  'Some Polycarbonates are made from bio-based polymers like corn starch and are compostable. Look for "PLA" or "Compostable" near the recycle logo. These items are also not recuclable but can be thrown into your composting bin.',
      percentRecycled2015: 0,
      howToDetail: "These other plastics are traditionally not recycled, so don't expect your local provider to accept them. The best option is to consult your municipality's website for specific instructions.",
      randomFactoid: 'According to a United Nations report, more than 220 million tons of plastic are produced each year.'
    }
  ], (err, data) => {
    if(err) {
      console.error(err.message)
    }
    res.send(data)
  })
})

module.exports = seed
