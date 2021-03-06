const products = {
  clothes: [
    {name: "Wonder Woman Logo Women's Sleep Shirt", src: "//images.superherostuff.com/image-pjwwlogosleeptee-primary-productresultset.jpg", price: 19.99 },
    {name: "TMNT White Long Sleeve T-Shirt", src: "//images.superherostuff.com/image-tstmntlswhite-primary-productresultset.jpg", price: 27.99},
    {name: "Punisher Movie Skull T-Shirt", src: "//images.superherostuff.com/image-tspunmoviesym-primary-productresultset.jpg", price: 17.99},
    {name: "Supergirl Girls Pink Pattern Symbol T-Shirt", src: "//images.superherostuff.com/image-tsupgpkptrngrl-primary-productresultset.jpg", price: 12.99},
    {name: "Wonder Woman Distressed Symbol T-Shirt for Women", src: "//images.superherostuff.com/image-tswwjrwmndistsym-primary-productresultset.jpg", price: 21.99},
    {name: "Hulk Fist Bump on Black Men's T-Shirt", src: "//images.superherostuff.com/image-tshlkfistbumpblk-primary-productresultset.jpg", price: 17.99},
    {name: "Batman Tuxedo Costume Reveal Sublimated T-Shirt", src: "//images.superherostuff.com/image-tsbatshirttie-primary-productresultset.jpg", price: 25.99},
    {name: "Flash Classic Barry Allen Dash Men's T-Shirt", src: "//images.superherostuff.com/image-tsflashbadash-primary-productresultset.jpg", price: 19.99},
    {name: "The Flash Distressed Symbol Women's T-Shirt", src: "//images.superherostuff.com/image-tsflashjundistsym-primary-productresultset.jpg", price: 21.99},
    {name: "Wonder Woman Mom Women's T-Shirt", src: "//images.superherostuff.com/image-tswwmomwom-primary-productresultset.jpg", price: 21.99},
    {name: "Iron Man Trust Me I'm A Genius Men's T-Shirt", src: "//images.superherostuff.com/image-tsimtrstmeimagen-primary-productresultset.jpg", price: 19.99},
    {name: "Flash Distressed Symbol T-Shirt", src: "//images.superherostuff.com/image-tsflashdistsym-primary-productresultset.jpg", price: 17.99},
    {name: "Hydra Symbol on Black T-Shirt", src: "//images.superherostuff.com/image-tshydrasymblk-primary-productresultset.jpg", price: 19.99},
    {name: "Superman Women's Super Mom T-Shirt", src: "//images.superherostuff.com/image-tssupjrmom-primary-productresultset.jpg", price: 21.99},
    {name: "Mjolnir Brewing Company Men's T-Shirt", src: "//images.superherostuff.com/image-tsthormjoinirbrewco-primary-productresultset.jpg", price: 19.99},
    {name: "Pym Tech Distressed Logo Men's T-Shirt", src: "//images.superherostuff.com/image-tsantmnpymtech-primary-productresultset.jpg", price: 19.99},
    {name: "Reverse Flash T-Shirt", src: "//images.superherostuff.com/image-tsflashreverse-primary-productresultset.jpg", price: 17.99},
    {name: "Wolverine Sublimated Costume Fitness T-Shirt", src: "//images.superherostuff.com/image-tswlvsubcst-primary-productresultset.jpg", price: 24.99},
    {name: "Ant-Man &amp; The Wasp Men's T-Shirt", src: "//images.superherostuff.com/image-tsantmnandwasp-primary-productresultset.jpg", price: 19.99},
    {name: "Venom Symbol Long Sleeve T-Shirt", src: "//images.superherostuff.com/image-tslsvensym-primary-productresultset.jpg", price: 21.99}
  ],
  appliances: [
    {name: "KitchenAid Artisan Design Tilt-Head Stand Mixer - 5Qt - 325-Watt - Azure Blue", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/129/12917/12917081.jpg", price: 299.99},
    {name: "KitchenAid Artisan Design Tilt-Head Stand Mixer - 5Qt - 325-Watt - Frosted Pearl", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/129/12917/12917082.jpg", price: 299.99},
    {name: "Blendtec Total Blender 2.6L 1500-Watts Countertop Blender - Black", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/105/10585/10585203.jpg", price: 299.99},
    {name: "Vitamix 6500 1.9L 1500-Watt Stand Blender - Platinum", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/126/12603/12603875.jpg", price: 449.99},
    {name: "Philips Digital Air Fryer - 0.8 kg - Black", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/103/10389/10389173.jpg", price: 199.99},
    {name: "T-Fal ActiFry Original Air Fryer - 1 kg - White", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/125/12567/12567913.jpg", price: 134.99},
    {name: "Breville Smart Oven Pro Convection Toaster Oven - 0.8 Cu. Ft. - Die Cast Stainless", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/103/10383/10383158.jpg", price: 239.99},
    {name: "Hamilton Beach Easy-Reach Convection Toaster Oven - 6-Slice - Stainless Steel", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/102/10233/10233517.jpg", price: 59.99},
    {name: "Oster Impressions Toaster - 4-Slice - Black", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/125/12549/12549279.jpg", price: 59.99},
    {name: "Breville Sous Chef Food Processor - 16-Cup - 1200-Watt", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/101/10178/10178391.jpg", price: 379.99},
    {name: "KitchenAid Food Processor - 7-Cup - Empire Red", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/123/12323/12323897.jpg", price: 99.99},
    {name: "T-Fal 25-in-1 Pressure Cooker - 6Qt", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/103/10396/10396866.jpg", price: 89.99},
    {name: "Instant Pot 7-in-1 Electric Pressure Cooker - 8 Qt", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/104/10456/10456264.jpg", price: 129.99},
    {name: "Instant Pot Ultra 10-in-1 Electric Pressure Cooker - 6Qt", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/108/10872/10872768.jpg", price: 139.99},
    {name: "Cuisinart Theatre Style Popcorn Maker (CPM-28C)", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/102/10297/10297784.jpg", price: 89.99},
    {name: "SodaStream Fizzi Soda Machine - Black", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/123/12390/12390460.jpg", price: 99.99},
    {name: "SodaStream Source Soda Machine - Black", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/123/12390/12390461.jpg", price: 119.99},
    {name: "Breville Barista Express Pump Espresso Machine - Stainless Steel", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/102/10256/10256821.jpg", price: 569.99},
    {name: "Breville IQ Electric Kettle - 1.7L - Glass", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/103/10318/10318932.jpg", price: 159.99},
    {name: "Lagostina 12-Piece Stainless Steel Cookware Set", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/125/12514/12514227.jpg", price: 199.99},
    {name: "Cuisinart Pakkawood Nitrogen 12-Piece Knife Block Set (PWNC-12PC)", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/110/11026/11026504.jpg", price: 99.99},
    {name: "Ninja Nutri Ninja Auto iQ Single Serve 1000 Watt Stand Blender with Blending Cups", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/106/10661/10661556.jpg", price: 118.99},
    {name: "Ninja Professional 2.1L 1100-Watt Stand Blender with Nutri Ninja Cups", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/106/10661/10661558.jpg", price: 129.99},
    {name: "Cuisinart VELOCITY Ultra Trio 1.5L 750-Watt Blender with Travel Cups", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/104/10460/10460155.jpg", price: 89.99},
    {name: "Breville Boss to Go Plus 700ml 1000-Watt Personal Blender - Silver", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/104/10409/10409479.jpg", price: 159.99},
    {name: "Ninja Professional 1.9L 1000-Watt Stand Blender - Black/Silver", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/126/12604/12604208.jpg", price: 99.99},
    {name: "T-Fal Ultimate EZ Clean Deep Fryer - 3.5L - Stainless Steel", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/103/10301/10301855.jpg", price: 97.99},
    {name: "T-Fal ActiFry Original Air Fryer - 1 kg - Black", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/114/11470/11470074.jpg", price: 149.99},
    {name: "T-fal Actifry 2-in-1 Air Fryer - 1.5 kg - Black", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/102/10270/10270225.jpg", price: 239.99},
    {name: "KitchenAid Custom Stand Mixer - 4.5Qt - 325-Watt - Empire Red", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/103/10394/10394857.jpg", price: 279.99},
    {name: "KitchenAid Custom Stand Mixer - 4.5Qt - 325-Watt - Metallic Chrome", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/103/10395/10395033.jpg", price: 279.99},
    {name: "KitchenAid Ultra Power Stand Mixer with Bonus Flex Edge Beater - 4.5Qt - 300 Watt -Empire Red", src: "https://multimedia.bbycastatic.ca/multimedia/products/150x150/104/10486/10486182.jpg", price: 279.99}
  ]
}