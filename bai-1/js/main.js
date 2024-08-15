
(() =>{
    // Process header nav
    const processHeaderNav = () => {
        const headerNavLink = document.querySelectorAll("#header-nav .nav-link");
        for(let link of headerNavLink) {
            link.addEventListener("click", (e) => {
                for(let innerLink of headerNavLink) {
                    innerLink.classList.remove("active");
                }
                e.target.classList.add("active");
            })
        }

        document.querySelector("header .header-logo").addEventListener("click", (e) => {
            e.preventDefault();
            headerNavLink[0].click();
        })
    }

    // Process slider
    const processSlider = () => {
        const heroSlider = document.getElementById("hero-slider");
        const sliderItems = heroSlider.querySelectorAll(".slider-item");
        const sliderDots = heroSlider.querySelector(".slider-dots");
        const numberDots = sliderItems.length;
        
        sliderDots.innerHTML  = "";
        let interalTime = 0;

        const clearAllDotActive = () => {
            const sliderDotsInner = heroSlider.querySelectorAll(".slider-dots .dot-item");
            for(let item of sliderDotsInner) {
                item.classList.remove("active");
            }
        }

        const setInterValSlider = () => {
            interalTime = setInterval(() => {
                const sliderDotsInner = heroSlider.querySelectorAll(".slider-dots .dot-item");
                let idxActive;
                let rangeTranslate;
                let lengthDots = sliderDotsInner.length;
                let nextIdxActive = 0;
                for(let i = 0; i < lengthDots; i++) {
                    let item = sliderDotsInner[i];
                    if(!item.classList.contains("active")) continue;
                    nextIdxActive = (i + 1) > (lengthDots - 1) ? 0 : (i+1) ;
                    break
                }
                clearAllDotActive();
                idxActive = +sliderDotsInner[nextIdxActive].dataset.index;
                rangeTranslate = idxActive * 100;
                sliderDotsInner[nextIdxActive].classList.add("active");
                for(let item of sliderItems) {
                    item.style.transform = `translateX(-${rangeTranslate}%)`;
                }
    
            }, 4000)
        }
        
        const dotClick = (e) => {
            clearInterval(interalTime);
            const idxActive = +e.currentTarget.dataset.index;
            const rangeTranslate = idxActive * 100;
            if(e.currentTarget.classList.contains("active")) return;
            clearAllDotActive();
            e.currentTarget.classList.add("active");
            for(let item of sliderItems) {
                item.style.transform = `translateX(-${rangeTranslate}%)`;
            }
            setTimeout(() => {
                setInterValSlider();
            }, 1000);
        }
        for(let i = 0; i < numberDots; i++) {
            const dotElement = document.createElement("div");
            dotElement.classList.add("dot-item");
            dotElement.setAttribute("data-index", i);
            if(i === 0)  dotElement.classList.add("active");
            dotElement.addEventListener("click", dotClick);
            sliderDots.appendChild(dotElement);
        }

        
        setInterValSlider();


    }

    // Process about tab
    const processAboutTabs = () => {
        const tabTitles = document.querySelectorAll(".tab-titles .tab-title");
        const tabTContents = document.querySelectorAll(".tab-contents .tab-content");

        const removeAllActive = () => {
            for(let titleEle of tabTitles) {
                titleEle.classList.remove("active");
            }

            for(let tabContentEle of tabTContents) {
                tabContentEle.classList.remove("active");
            }
        }

        for(let titleEle of tabTitles) {
            titleEle.addEventListener("click", (e) => {
                if(e.currentTarget.classList.contains("active")) return;
                const idTabContent = e.currentTarget.dataset.tabContent;
                const tabContentEleId = document.querySelector(`.tab-contents #${idTabContent}`);
                console.log(idTabContent, tabContentEleId, e.currentTarget)
                if(!tabContentEleId) return;
                removeAllActive();
                e.currentTarget.classList.add("active");
                tabContentEleId.classList.add("active"); 
            });
        }

    }
    
    document.addEventListener("DOMContentLoaded", () => {
        // call processHeaderNav
        processHeaderNav();

        // process slider
        processSlider();

        // process tabs about
        processAboutTabs();
    })
})();