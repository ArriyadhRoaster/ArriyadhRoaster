import 'lite-youtube-embed';
import BasePage from './base-page';
import Fslightbox from 'fslightbox';
window.fslightbox = Fslightbox;
import { zoom } from './partials/image-zoom';

class Product extends BasePage {
    onReady() {

   this.catblock()
     
        app.watchElements({
            totalPrice: '.total-price',
            beforePrice: '.before-price',
            startingPriceTitle: '.starting-price-title',

        });
        

        if(imageZoom){
            // call the function when the page is ready
            this.initImagesZooming();
            // listen to screen resizing
            window.addEventListener('resize', () => this.initImagesZooming());
        }
       
    }

	initImagesZooming() {
		// skip if the screen is not desktop or if glass magnifier
		// is already crated for the image before
		const imageZoom = document.querySelector('.image-slider .swiper-slide-active .img-magnifier-glass');
		if (window.innerWidth  < 1024 || imageZoom) return;
		setTimeout(() => {
			// set delay after the resizing is done, start creating the glass
			// to create the glass in the proper position
			const image = document.querySelector('.image-slider .swiper-slide-active img');
			zoom(image.id, 2);
		}, 200);
		

		document.querySelector('salla-slider.details-slider').addEventListener('slideChange', (e) => {
			// set delay till the active class is ready
			setTimeout(() => {
				const imageZoom = document.querySelector('.image-slider .swiper-slide-active .img-magnifier-glass');
			
				// if the zoom glass is already created skip
				if (imageZoom) return;
				const image = document.querySelector('.image-slider .swiper-slide-active img');
				zoom(image.id, 2);
			}, 200)
		})
	}
    



  
    async catblock() {


        try {
            // Get the productId from the HTML element with the ID 'product-container'
            const productId = document.getElementById('product-container').dataset.productId;

            // Make the API request
            const response = await salla.api.request('component/list', { params: { paths: ['home.main-links'] } });

            // Access the data array from the response
            const dataArray = response.data;

            // Find the item where itemcode matches productId
            const matchedItem = dataArray.find((item) => item.component.item_collection[0]?.itemcode === productId);

            // Log the matched item for debugging
            console.log('Matched Item:', matchedItem);

            // Access the section container to hide/show the entire section
            const aboutCoffeeSection = document.getElementById('About-coffee');

            // Access the div elements to display the String_1 value, AboutCoffeeicon image, AboutCoffeeTitle, and AboutCoffeeDis
            const string1DisplayDiv = document.getElementById('string1Display');
            const aboutCoffeeIconDisplayDiv = document.getElementById('aboutCoffeeIconDisplay');
            const aboutCoffeeTitleDisplayDiv = document.getElementById('aboutCoffeeTitleDisplay');
            const aboutCoffeeDisDisplayDiv = document.getElementById('aboutCoffeeDisDisplay');


            const itemDisBlockTitleDisplay = document.getElementById('itemDisBlockTitleDisplay');
            const itemDisBlockDisplay = document.getElementById('itemDisBlockDisplay');


            // اخفاء السيكشن اذا كان لا يحتوي داتا
       // Access the About-coffeealo section
       const aboutCoffeealoSection = document.getElementById('About-coffeealo');

       // Logic to hide or show the About-coffeealo section
       if (!aboutCoffeealoSection) {
           console.error('About-coffeealo section not found');
           return;
       }

       if (matchedItem && matchedItem.component && matchedItem.component.item_collection[0]) {
           // Show the section if matched item is found
           aboutCoffeealoSection.style.display = 'block';
           // Update the content based on matchedItem
           // ... (code to update content based on matchedItem) ...
       } else {
           // Hide the About-coffeealo section if no matching item is found
           aboutCoffeealoSection.style.display = 'none';
       }

         // اخفاء السيكشن اذا كان لا يحتوي داتا
            



            // Check if the elements and properties exist before updating content
            if (aboutCoffeeSection && string1DisplayDiv && aboutCoffeeIconDisplayDiv && aboutCoffeeTitleDisplayDiv && aboutCoffeeDisDisplayDiv && matchedItem && matchedItem.component.item_collection[0]) {
                // Display the String_1 value in the div
                const string1Value = matchedItem.component.item_collection[0].string_1 || "N/A";
                string1DisplayDiv.textContent = `${string1Value}`;

                // Display the AboutCoffeeicon image in the div
                const aboutCoffeeIconURL = matchedItem.component.item_collection[0].AboutCoffeeicon || "";
                aboutCoffeeIconDisplayDiv.innerHTML = `<img src="${aboutCoffeeIconURL}" alt="About Coffee Icon">`;

                // Display the AboutCoffeeTitle text in the div
                const aboutCoffeeTitle = matchedItem.component.item_collection[0].aboutcoffetitle || "N/A";
                aboutCoffeeTitleDisplayDiv.textContent = `${aboutCoffeeTitle}`;

                // Display the AboutCoffeeDis text in the div
                const aboutCoffeeDis = matchedItem.component.item_collection[0].aboutcoffedis || "N/A";
                aboutCoffeeDisDisplayDiv.textContent = `${aboutCoffeeDis}`;

                // Show the entire section
                aboutCoffeeSection.style.display = 'block';

                // Add new items to display
                const aboutCoffeeIcon1DisplayDiv = document.getElementById('aboutCoffeeIconDisplay1');
                const aboutCoffeeTitle1DisplayDiv = document.getElementById('aboutCoffeeTitleDisplay1');
                const aboutCoffeeDis1DisplayDiv = document.getElementById('aboutCoffeeDisDisplay1');

                // Display the AboutCoffeeicon1 image in the div
                const aboutCoffeeIcon1URL = matchedItem.component.item_collection[0].aboutcoffeeicon1 || "";
                aboutCoffeeIcon1DisplayDiv.innerHTML = `<img src="${aboutCoffeeIcon1URL}" alt="About Coffee Icon 1">`;

                // Display the aboutcoffetitle1 text in the div
                const aboutCoffeeTitle1 = matchedItem.component.item_collection[0].aboutcoffetitle1 || "N/A";
                aboutCoffeeTitle1DisplayDiv.textContent = `${aboutCoffeeTitle1}`;

                // Display the aboutcoffedis1 text in the div
                const aboutCoffeeDis1 = matchedItem.component.item_collection[0].aboutcoffedis1 || "N/A";
                aboutCoffeeDis1DisplayDiv.textContent = `${aboutCoffeeDis1}`;

                // Add new items to display
                const aboutCoffeeIcon2DisplayDiv = document.getElementById('aboutCoffeeIconDisplay2');
                const aboutCoffeeTitle2DisplayDiv = document.getElementById('aboutCoffeeTitleDisplay2');
                const aboutCoffeeDis2DisplayDiv = document.getElementById('aboutCoffeeDisDisplay2');

                // Display the AboutCoffeeicon2 image in the div
                const aboutCoffeeIcon2URL = matchedItem.component.item_collection[0].aboutcoffeeicon2 || "";
                aboutCoffeeIcon2DisplayDiv.innerHTML = `<img src="${aboutCoffeeIcon2URL}" alt="About Coffee Icon 2">`;


                // Display the aboutcoffetitle2 text in the div
                const aboutCoffeeTitle2 = matchedItem.component.item_collection[0].aboutcoffetitle2 || "N/A";
                aboutCoffeeTitle2DisplayDiv.textContent = `${aboutCoffeeTitle2}`;


                // Display the aboutcoffedis2 text in the div
                const aboutCoffeeDis2 = matchedItem.component.item_collection[0].aboutcoffedis2 || "N/A";
                aboutCoffeeDis2DisplayDiv.textContent = `${aboutCoffeeDis2}`;

                // Add new items to display
                const aboutCoffeeIcon3DisplayDiv = document.getElementById('aboutCoffeeIconDisplay3');
                const aboutCoffeeTitle3DisplayDiv = document.getElementById('aboutCoffeeTitleDisplay3');
                const aboutCoffeeDis3DisplayDiv = document.getElementById('aboutCoffeeDisDisplay3');

                // Display the AboutCoffeeicon3 image in the div
                const aboutCoffeeIcon3URL = matchedItem.component.item_collection[0].aboutcoffeeicon3 || "";
                aboutCoffeeIcon3DisplayDiv.innerHTML = `<img src="${aboutCoffeeIcon3URL}" alt="About Coffee Icon 3">`;

                // Display the aboutcoffetitle3 text in the div
                const aboutCoffeeTitle3 = matchedItem.component.item_collection[0].aboutcoffetitle3 || "N/A";
                aboutCoffeeTitle3DisplayDiv.textContent = `${aboutCoffeeTitle3}`;

                // Display the aboutcoffedis3 text in the div
                const aboutCoffeeDis3 = matchedItem.component.item_collection[0].aboutcoffedis3 || "N/A";
                aboutCoffeeDis3DisplayDiv.textContent = `${aboutCoffeeDis3}`;

                // Add new items to display
                const aboutCoffeeIcon4DisplayDiv = document.getElementById('aboutCoffeeIconDisplay4');
                const aboutCoffeeTitle4DisplayDiv = document.getElementById('aboutCoffeeTitleDisplay4');
                const aboutCoffeeDis4DisplayDiv = document.getElementById('aboutCoffeeDisDisplay4');

                // Display the AboutCoffeeicon4 image in the div
                const aboutCoffeeIcon4URL = matchedItem.component.item_collection[0].aboutcoffeeicon4 || "";
                aboutCoffeeIcon4DisplayDiv.innerHTML = `<img src="${aboutCoffeeIcon4URL}" alt="About Coffee Icon 4">`;

                // Display the aboutcoffetitle4 text in the div
                const aboutCoffeeTitle4 = matchedItem.component.item_collection[0].aboutcoffetitle4 || "N/A";
                aboutCoffeeTitle4DisplayDiv.textContent = `${aboutCoffeeTitle4}`;

                // Display the aboutcoffedis4 text in the div
                const aboutCoffeeDis4 = matchedItem.component.item_collection[0].aboutcoffedis4 || "N/A";
                aboutCoffeeDis4DisplayDiv.textContent = `${aboutCoffeeDis4}`;

                // Add new items to display for prepearway
                const prepearwayIconDisplayDiv = document.getElementById('prepearwayIconDisplay');
                const prepearwayTitleDisplayDiv = document.getElementById('prepearwayTitleDisplay');
                const prepearwayDisinfoDisplayDiv = document.getElementById('prepearwayDisinfoDisplay');

                // Display the prepearwayicon image in the div
                const prepearwayIconURL = matchedItem.component.item_collection[0].prepearwayicon || "";
                prepearwayIconDisplayDiv.innerHTML = `<img src="${prepearwayIconURL}" alt="Prepearway Icon">`;

                // Display the prepearwaytitel text in the div
                const prepearwayTitel = matchedItem.component.item_collection[0].prepearwaytitel || "N/A";
                prepearwayTitleDisplayDiv.textContent = `${prepearwayTitel}`;

                // Display the prepearwaydisinfo text in the div
                const prepearwayDisinfo = matchedItem.component.item_collection[0].prepearwaydisinfo || "N/A";
                prepearwayDisinfoDisplayDiv.textContent = `${prepearwayDisinfo}`;

                // Add new items to display for prepearway1
                const prepearwayIcon1DisplayDiv = document.getElementById('prepearwayIconDisplay1');
                const prepearwayTitle1DisplayDiv = document.getElementById('prepearwayTitleDisplay1');
                const prepearwayDisinfo1DisplayDiv = document.getElementById('prepearwayDisinfoDisplay1');

                // Display the prepearwayicon1 image in the div
                const prepearwayIcon1URL = matchedItem.component.item_collection[0].prepearwayicon1 || "";
                prepearwayIcon1DisplayDiv.innerHTML = `<img src="${prepearwayIcon1URL}" alt="Prepearway Icon 1">`;

                // Display the prepearwaytitel1 text in the div
                const prepearwayTitel1 = matchedItem.component.item_collection[0].prepearwaytitel1 || "N/A";
                prepearwayTitle1DisplayDiv.textContent = `${prepearwayTitel1}`;

                // Display the prepearwaydisinfo1 text in the div
                const prepearwayDisinfo1 = matchedItem.component.item_collection[0].prepearwaydisinfo1 || "N/A";
                prepearwayDisinfo1DisplayDiv.textContent = `${prepearwayDisinfo1}`;

                // Add new items to display for prepearway2
                const prepearwayIcon2DisplayDiv = document.getElementById('prepearwayIconDisplay2');
                const prepearwayTitle2DisplayDiv = document.getElementById('prepearwayTitleDisplay2');
                const prepearwayDisinfo2DisplayDiv = document.getElementById('prepearwayDisinfoDisplay2');

                // Display the prepearwayicon2 image in the div
                const prepearwayIcon2URL = matchedItem.component.item_collection[0].prepearwayicon2 || "";
                prepearwayIcon2DisplayDiv.innerHTML = `<img src="${prepearwayIcon2URL}" alt="Prepearway Icon 2">`;

                // Display the prepearwaytitel2 text in the div
                const prepearwayTitel2 = matchedItem.component.item_collection[0].prepearwaytitel2 || "N/A";
                prepearwayTitle2DisplayDiv.textContent = `${prepearwayTitel2}`;

                // Display the prepearwaydisinfo2 text in the div
                const prepearwayDisinfo2 = matchedItem.component.item_collection[0].prepearwaydisinfo2 || "N/A";
                prepearwayDisinfo2DisplayDiv.textContent = `${prepearwayDisinfo2}`;

                // Add new items to display for prepearway3
                const prepearwayIcon3DisplayDiv = document.getElementById('prepearwayIconDisplay3');
                const prepearwayTitle3DisplayDiv = document.getElementById('prepearwayTitleDisplay3');
                const prepearwayDisinfo3DisplayDiv = document.getElementById('prepearwayDisinfoDisplay3');

                // Display the prepearwayicon3 image in the div
                const prepearwayIcon3URL = matchedItem.component.item_collection[0].prepearwayicon3 || "";
                prepearwayIcon3DisplayDiv.innerHTML = `<img src="${prepearwayIcon3URL}" alt="Prepearway Icon 3">`;

                // Display the prepearwaytitel3 text in the div
                const prepearwayTitel3 = matchedItem.component.item_collection[0].prepearwaytitel3 || "N/A";
                prepearwayTitle3DisplayDiv.textContent = `${prepearwayTitel3}`;

                // Display the prepearwaydisinfo3 text in the div
                const prepearwayDisinfo3 = matchedItem.component.item_collection[0].prepearwaydisinfo3 || "N/A";
                prepearwayDisinfo3DisplayDiv.textContent = `${prepearwayDisinfo3}`;

                // Add new items to display for prepearway4
                const prepearwayIcon4DisplayDiv = document.getElementById('prepearwayIconDisplay4');
                const prepearwayTitle4DisplayDiv = document.getElementById('prepearwayTitleDisplay4');
                const prepearwayDisinfo4DisplayDiv = document.getElementById('prepearwayDisinfoDisplay4');

                // Add new items to display for story
                const storyTitDisplayDiv = document.getElementById('storyTitDisplay');
                const storyInfoDisplayDiv = document.getElementById('storyInfoDisplay');

                const itemDisBlockTitleDisplay = document.getElementById('itemDisBlockTitleDisplay');
                const itemDisBlockDisplay = document.getElementById('itemDisBlockDisplay');





                // Display the prepearwayicon4 image in the div
                const prepearwayIcon4URL = matchedItem.component.item_collection[0].prepearwayicon4 || "";
                prepearwayIcon4DisplayDiv.innerHTML = `<img src="${prepearwayIcon4URL}" alt="Prepearway Icon 4">`;

                // Display the prepearwaytitel4 text in the div
                const prepearwayTitel4 = matchedItem.component.item_collection[0].prepearwaytitel4 || "N/A";
                prepearwayTitle4DisplayDiv.textContent = `${prepearwayTitel4}`;

                // Display the prepearwaydisinfo4 text in the div
                const prepearwayDisinfo4 = matchedItem.component.item_collection[0].prepearwaydisinfo4 || "N/A";
                prepearwayDisinfo4DisplayDiv.textContent = `${prepearwayDisinfo4}`;

                // Display the storytit text in the div
                const storyTit = matchedItem.component.item_collection[0].storytit || "N/A";
                storyTitDisplayDiv.textContent = `${storyTit}`;

                // Display the storyinfo text in the div
                const storyInfo = matchedItem.component.item_collection[0].storyinfo || "N/A";
                storyInfoDisplayDiv.textContent = `${storyInfo}`;




                // Show or hide the Product-description section based on data presence
                const productDescriptionSection = document.getElementById('Product-description');
                const displayedValues = [
                    aboutCoffeeTitle1, aboutCoffeeDis1,
                    aboutCoffeeTitle2, aboutCoffeeDis2,
                    aboutCoffeeTitle3, aboutCoffeeDis3,
                    aboutCoffeeTitle4, aboutCoffeeDis4,
                    prepearwayTitel, prepearwayDisinfo,
                    prepearwayTitel1, prepearwayDisinfo1,
                    prepearwayTitel2, prepearwayDisinfo2,
                    prepearwayTitel3, prepearwayDisinfo3,
                    prepearwayTitel4, prepearwayDisinfo4,storyTit,storyInfo

                ];

                const hasNonEmptyValue = displayedValues.some(value => value.trim() !== '' && value !== 'N/A');

                if (hasNonEmptyValue) {
                    productDescriptionSection.style.display = 'block';
                } else {
                    productDescriptionSection.style.display = 'none';
                }
            } else {
                // Hide the entire section if there is no match
                aboutCoffeeSection.style.display = 'none';
            }







            const prepearwayDisplayElement = document.getElementById('prepearwayDisplay');

            if (!prepearwayDisplayElement) {
                console.error('prepearwayDisplay element not found');
                return;
            }
        
            if (!matchedItem || !matchedItem.component || !matchedItem.component.item_collection || !Array.isArray(matchedItem.component.item_collection)) {
                console.error('Invalid data structure');
                prepearwayDisplayElement.style.display = 'none';
                return;
            }
        
            // Find the first item with prepearway data
            const prepearwayDataItem = matchedItem.component.item_collection.find(item => item.prepearway);
        
            if (prepearwayDataItem && prepearwayDataItem.prepearway) {
                // Assuming prepearway is a string. If it's not, you'll need to process it accordingly.
                prepearwayDisplayElement.textContent = prepearwayDataItem.prepearway;
                prepearwayDisplayElement.style.display = 'block';
            } else {
                prepearwayDisplayElement.style.display = 'none';
            }


           
       



    




            

            


            if (itemDisBlockTitleDisplay && itemDisBlockDisplay && matchedItem.component.item_collection[0]) {
                const itemDisBlockTitle = matchedItem.component.item_collection[0].itemdisblocktitle || "Title Not Available";
                const itemDisBlock = matchedItem.component.item_collection[0].itemdisblock || "Description Not Available";

                itemDisBlockTitleDisplay.textContent = itemDisBlockTitle;
                itemDisBlockDisplay.textContent = itemDisBlock;
            }

            // ... [other logic to get data and update contents] ...

            // Access the section and wrapper elements
         
      







          




            // Function to directly hide an element
            function hideElementIfEmpty(element, values) {
                const hasNonEmptyValue = values.some(value => value.trim() !== '' && value !== 'N/A');
                if (hasNonEmptyValue) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            }


        } catch (error) {
            console.error('Error fetching data:', error);
        }



    }















    registerEvents() {
        salla.product.event.onPriceUpdated((res) => {
            app.startingPriceTitle?.classList.add('hidden');

            app.totalPrice.forEach(el => el.innerText = salla.money(res.data.price));
            // app.totalPrice.innerText = salla.money(res.data.price);

            app.anime('.total-price', { scale: [0.88, 1] });

            if (res.data.has_sale_price) {
                app.beforePrice.forEach(el => {
                    el.style.display = 'inline'
                    el.innerText = salla.money(res.data.regular_price)
                });
                // app.beforePrice.style.display = 'inline';
                // app.beforePrice.innerText = salla.money(res.data.regular_price);
                return;
            }
            app.beforePrice.length && app.beforePrice.forEach(el => el.style.display = 'none');
            // app.beforePrice && (app.beforePrice.style.display = 'none')
        });

        app.onClick('#btn-show-more', e => app.all('#more-content', div => {
            e.target.classList.add('is-expanded');
            div.style = `max-height:${div.scrollHeight}px`;
        }) || e.target.remove());
    }
}
Product.initiateWhenReady(['product.single']);



