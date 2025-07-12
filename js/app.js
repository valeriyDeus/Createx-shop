(() => {
    "use strict";
    var __webpack_require__ = {};
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    const dropdownLang = () => {
        document.addEventListener("click", (_ref => {
            let {target} = _ref;
            if (target.closest("[data-dropdown-button]")) {
                const languageBlock = target.closest(".language-top-header");
                if (languageBlock) languageBlock.classList.toggle("is-active");
            } else {
                const languageBlock = document.querySelector(".language-top-header");
                if (languageBlock && languageBlock.classList.contains("is-active")) languageBlock.classList.remove("is-active");
            }
        }));
    };
    const getHash = () => location.hash ? location.hash.replace("#", "") : null;
    const setHash = hash => {
        hash = hash ? `#${hash}` : window.location.href.split("#")[0];
        history.pushState("", "", hash);
    };
    const FLS = message => {
        setTimeout((() => {
            if (window.FLS) console.log(message);
        }), 0);
    };
    const uniqArray = array => array.filter(((item, index, self) => self.indexOf(item) === index));
    const dataMediaQueries = (array, dataSetValue) => {
        const media = Array.from(array).filter((item => item.dataset[dataSetValue] ? item.dataset[dataSetValue].split(",")[0] : null));
        if (!media.length) return;
        const breakpointsArray = [];
        media.forEach((item => {
            const params = item.dataset[dataSetValue];
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        }));
        let mdQueries = breakpointsArray.map((item => `(${item.type}-width: ${item.value}px),${item.value},${item.type}`));
        mdQueries = uniqArray(mdQueries);
        const mdQueriesArray = [];
        if (mdQueries.length) {
            mdQueries.forEach((breakpoint => {
                const paramsArray = breakpoint.split(",");
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
                const itemsArray = breakpointsArray.filter((item => {
                    if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                }));
                mdQueriesArray.push({
                    itemsArray,
                    matchMedia
                });
            }));
            return mdQueriesArray;
        }
    };
    const isPCViewPort = () => window.innerWidth >= 1230 ? true : false;
    const utils_debounce = function(func) {
        let delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 250;
        return function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            let timer;
            clearTimeout(timer);
            timer = setTimeout((() => {
                func.apply(this, args);
            }), delay);
        };
    };
    const setItemToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
    const getItemFromLocalStorage = key => JSON.parse(localStorage.getItem(key));
    const removeItemFromLocalStorage = key => {
        localStorage.removeItem(key);
    };
    const addLoadedClass = () => {
        if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (() => {
            setTimeout((() => document.documentElement.classList.add("loaded")), 0);
        }));
    };
    const headerHeight = () => {
        const getHeaderHeight = () => {
            const header = document.querySelector(".header");
            const headerHeight = header.offsetHeight;
            const topHeaderHeight = header.querySelector(".header__top").offsetHeight;
            document.querySelector(":root").style.setProperty("--header-height", `${headerHeight}px`);
            document.querySelector(":root").style.setProperty("--top-header-height", `${topHeaderHeight}px`);
        };
        getHeaderHeight();
        window.addEventListener("orientationchange", getHeaderHeight);
        window.addEventListener("resize", utils_debounce(getHeaderHeight, 200));
    };
    const gotoBlock = function(targetSelector) {
        let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const targetBlockElement = document.querySelector(targetSelector);
        if (!targetBlockElement) {
            FLS(`[GotoBlock]: There is no such block on the page: ${targetSelector}`);
            return;
        }
        let defaultConfig = {
            noHeader: false,
            speed: 500,
            offsetTop: 0
        };
        const {noHeader, speed, offsetTop} = {
            ...defaultConfig,
            ...config
        };
        const getHeaderHeight = () => {
            const headerElement = document.querySelector("header.header");
            let headerHeight = 0;
            if (!headerElement.classList.contains("header-scroll")) {
                headerElement.style.cssText = `transition-duration: 0s;`;
                headerElement.classList.add("header-scroll");
                headerHeight = headerElement.offsetHeight;
                headerElement.classList.remove("header-scroll");
                setTimeout((() => {
                    headerElement.style.cssText = ``;
                }), 0);
            } else headerHeight = headerElement.offsetHeight;
            return headerHeight;
        };
        const headerItemHeight = noHeader ? getHeaderHeight() : 0;
        if (document.documentElement.classList.contains("menu-open")) menuClose();
        const targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY - headerItemHeight - offsetTop;
        window.scrollTo({
            top: targetBlockElementPosition,
            behavior: "smooth"
        });
        FLS(`[GotoBlock]: We go to ${targetSelector}`);
    };
    let bodyLockStatus = true;
    const bodyUnlock = function() {
        let delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = "";
                }));
                document.body.style.paddingRight = "";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((() => {
                bodyLockStatus = true;
            }), delay);
        }
    };
    const bodyLock = function() {
        let delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
            lockPaddingElements.forEach((lockPaddingElement => {
                lockPaddingElement.style.paddingRight = lockPaddingValue;
            }));
            document.body.style.paddingRight = lockPaddingValue;
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((() => {
                bodyLockStatus = true;
            }), delay);
        }
    };
    const bodyLockToggle = function() {
        let delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
        document.documentElement.classList.contains("lock") ? bodyUnlock(delay) : bodyLock(delay);
    };
    const menuClose = () => {
        bodyUnlock();
        document.documentElement.classList.remove("menu-open");
    };
    const _slideUp = function(target) {
        let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
        let showmore = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        if (!target.classList.contains("slide")) {
            target.classList.add("slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout((() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };
    const _slideDown = function(target) {
        let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
        let showmore = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        if (!target.classList.contains("slide")) {
            target.classList.add("slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout((() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };
    const _slideToggle = function(target) {
        let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
        target.hidden ? _slideDown(target, duration) : _slideUp(target, duration);
    };
    const megaMenuShow = () => {
        document.addEventListener("click", (_ref => {
            let {target} = _ref;
            return megaMenuAction(target);
        }));
        function megaMenuAction(target) {
            document.querySelector("[data-mega-menu]");
            if (bodyLockStatus && target.closest(".main-header__search-form > .form__input")) {
                if (!document.documentElement.classList.contains("mega-menu-open")) {
                    document.documentElement.classList.add("mega-menu-open");
                    bodyLock();
                }
            } else {
                if (target.closest("[data-mega-menu]") && !target.closest("[data-close-menu]")) return;
                if (bodyLockStatus && document.documentElement.classList.contains("mega-menu-open")) {
                    document.documentElement.classList.remove("mega-menu-open");
                    bodyUnlock();
                }
            }
        }
    };
    const burgerMenu = () => {
        const burger = document.querySelector("[data-burger-button]");
        if (burger) document.addEventListener("click", (_ref => {
            let {target} = _ref;
            if (bodyLockStatus && target.closest("[data-burger-button]")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    };
    const showSearchInput = () => {
        document.addEventListener("click", (_ref => {
            let {target} = _ref;
            if (target.closest("[data-show-input]")) {
                const searchForm = target.closest(".main-header__search").querySelector(".main-header__search-form");
                if (!searchForm.classList.contains("is-show")) searchForm.classList.add("is-show");
            } else {
                const searchForm = document.querySelector(".main-header__search-form");
                if (searchForm.classList.contains("is-show") && !target.closest(".main-header__search-form")) searchForm.classList.remove("is-show");
            }
        }));
    };
    let addWindowScrollEvent = false;
    function headerScroll() {
        addWindowScrollEvent = true;
        const header = document.querySelector("header.header");
        const headerShow = header.hasAttribute("data-scroll-show");
        const startPoint = +header.dataset.scroll || 1;
        let scrollDirection = 0;
        document.addEventListener("windowScroll", (e => {
            const {scrollTop} = e.detail;
            if (scrollTop >= startPoint) {
                toggleClass(header, "header--scroll", true);
                if (headerShow) if (scrollTop < scrollDirection) toggleClass(header, "header--show", false); else toggleClass(header, "header--show", true);
            } else {
                toggleClass(header, "header--scroll", false);
                if (headerShow) toggleClass(header, "header--show", false);
            }
            scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
        }));
        function toggleClass(element, className, condition) {
            if (condition) {
                if (!element.classList.contains(className)) element.classList.add(className);
            } else if (element.classList.contains(className)) element.classList.remove(className);
        }
    }
    setTimeout((() => {
        if (addWindowScrollEvent) window.addEventListener("scroll", (() => {
            const scrollTop = window.scrollY;
            const windowScroll = new CustomEvent("windowScroll", {
                detail: {
                    scrollTop
                }
            });
            document.dispatchEvent(windowScroll);
        }));
    }), 0);
    function initTimer() {
        const timer = document.querySelector("[data-countdown-timer]");
        if (!timer) return;
        const lang = timer.dataset.countdownTimer;
        const daysValue = timer.querySelector(".timer__days .timer__value");
        const hoursValue = timer.querySelector(".timer__hours .timer__value");
        const minutesValue = timer.querySelector(".timer__minutes .timer__value");
        const secondsValue = timer.querySelector(".timer__seconds .timer__value");
        const daysText = timer.querySelector(".timer__days .timer__text");
        const hoursText = timer.querySelector(".timer__hours .timer__text");
        const minutesText = timer.querySelector(".timer__minutes .timer__text");
        const secondsText = timer.querySelector(".timer__seconds .timer__text");
        const declOfNumIntl = function(number, forms) {
            let locale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "en";
            const pluralRules = new Intl.PluralRules(locale);
            const rulesMap = {
                uk: {
                    one: forms[0],
                    few: forms[1],
                    many: forms[2],
                    other: forms[2]
                },
                en: {
                    one: forms[0],
                    other: forms[1]
                }
            };
            const form = pluralRules.select(number);
            return (rulesMap[locale] || rulesMap["en"])[form];
        };
        const format = value => value < 10 ? "0" + value : value;
        const langMap = {
            uk: {
                days: [ "день", "дня", "днів" ],
                hours: [ "година", "години", "годин" ],
                minutes: [ "хвилина", "хвилини", "хвилин" ],
                seconds: [ "секунда", "секунди", "секунд" ]
            },
            en: {
                days: [ "day", "days" ],
                hours: [ "hour", "hours" ],
                minutes: [ "minute", "minutes" ],
                seconds: [ "second", "seconds" ]
            }
        };
        const forms = langMap[lang] || langMap.en;
        const updateTimer = () => {
            const {offerEndDate} = timer.dataset;
            const currentDate = new Date;
            const limitedDate = new Date(offerEndDate);
            const endDate = limitedDate - currentDate;
            if (endDate <= 0) {
                daysValue.textContent = hoursValue.textContent = minutesValue.textContent = secondsValue.textContent = "00";
                return;
            }
            const days = Math.floor(endDate / 1e3 / 60 / 60 / 24);
            const hours = Math.floor(endDate / 1e3 / 60 / 60) % 24;
            const minutes = Math.floor(endDate / 1e3 / 60) % 60;
            const seconds = Math.floor(endDate / 1e3) % 60;
            daysValue.textContent = format(days);
            hoursValue.textContent = format(hours);
            minutesValue.textContent = format(minutes);
            secondsValue.textContent = format(seconds);
            daysText.textContent = declOfNumIntl(days, forms.days, lang);
            hoursText.textContent = declOfNumIntl(hours, forms.hours, lang);
            minutesText.textContent = declOfNumIntl(minutes, forms.minutes, lang);
            secondsText.textContent = declOfNumIntl(seconds, forms.seconds, lang);
        };
        updateTimer();
        setInterval(updateTimer, 1e3);
    }
    function pageNavigation() {
        document.addEventListener("click", pageNavigationAction);
        document.addEventListener("watcherCallback", pageNavigationAction);
        function pageNavigationAction(e) {
            if (e.type === "click") {
                const {target} = e;
                if (target.closest("[data-goto]")) {
                    const gotoLink = target.closest("[data-goto]");
                    const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                    const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                    const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                    const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                    gotoBlock(gotoLinkSelector, {
                        noHeader,
                        speed: gotoSpeed,
                        offsetTop
                    });
                    e.preventDefault();
                }
            }
        }
    }
    const cartToggle = target => {
        const cartButton = target.closest(".main-header__button--cart");
        const cartCloseButton = target.closest(".cart__close");
        const isCartOpen = document.documentElement.classList.contains("cart-open");
        const clickOutsideCart = !target.closest(".cart");
        if (cartButton && bodyLockStatus) {
            bodyLockToggle();
            document.documentElement.classList.toggle("cart-open");
            return;
        }
        if (cartCloseButton) {
            bodyLockToggle();
            document.documentElement.classList.remove("cart-open");
            return;
        }
        if (clickOutsideCart && isCartOpen && !cartButton) {
            bodyLockToggle();
            document.documentElement.classList.remove("cart-open");
        }
    };
    const productCartHTML = productItem => {
        const {productId, category, productTitle, productImage, quantity, productPrice, color, size, link} = productItem;
        const productPriceHTML = productPrice => {
            const {price, discountPrice} = productPrice;
            if (!price) return "";
            if (discountPrice) return `\n          <div class="product-item__price" data-now-price=${discountPrice} data-old-price=${price}>\n            <span class="product-item__now">$${discountPrice}</span>\n            <span class="product-item__old">$${price}</span>\n          </div>\n      `; else return ` \n          <div class="product-item__price" data-now-price=${price}>\n            <span>$${price}</span>\n          </div>\n       `;
        };
        const colorProductHTML = color => {
            if (!color) return "";
            return `\n      <div class="info-product__color">\n        Color: <span data-color="${color}">${color}</span>\n      </div>\n    `;
        };
        const sizeProductHTML = size => {
            if (!size) return "";
            return `\n      <div class="info-product__size">\n        Size: <span>${size}</span>\n      </div>\n    `;
        };
        const wishlistButtonHTML = productId => {
            const wishlistButton = document.querySelector(`.product[data-product-id="${productId}"] .content-product__wishlist`);
            if (wishlistButton) return `\n      <button class="product-item__wishlist ${wishlistButton.classList.contains("wishlist-active") ? "wishlist-active" : ""}" data-product-id="${productId}">\n        <span>Move to</span>\n        <svg>\n          <use xlink:href="img/sprite/icons.svg#heard"></use>\n        </svg>\n      </button>\n    `;
        };
        return `\n            <li class="cart__item">\n             <div class="cart__product product-item" data-product-id=${productId} data-category=${category}>\n              <a class="product-item__image" href="${link}">\n                <img src="${productImage}" alt="${productTitle}">\n              </a>\n              <div class="product-item__body">\n                <div class="product-item__info info-product">\n                  <a class="info-product__title" href="${link}">\n                    <span>${productTitle}</span>\n                  </a>\n                  ${colorProductHTML(color)}\n                  ${sizeProductHTML(size)}\n                </div>\n                <div class="product-item__total">\n                  <div class="quantity" data-quantity>\n                    <div class="quantity__input">\n                      <input autocomplete="off" type="text" name="form[quantity]" data-quantity-min="1" data-quantity-max="5" data-quantity-value value="${quantity ? quantity : 1}">\n                    </div>\n                    <button class="quantity__button quantity__button--plus" data-quantity-plus type="button">\n                    </button>\n                    <button class="quantity__button quantity__button--minus" data-quantity-minus type="button">\n                    </button>\n                  </div>\n                  ${productPriceHTML(productPrice)}\n                </div>\n                ${wishlistButtonHTML(productId)}\n              </div>\n              <button class="product-item__remove" aria-label="Remove product">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#delete"></use>\n                </svg>\n              </button>\n            </div>\n          </li>\n  `;
    };
    const updateCartCountItems = cart => {
        if (cart) {
            const cartList = cart.querySelector(".cart__list");
            const countItems = cartList.querySelectorAll(".cart__item").length;
            const cartButtonCount = document.querySelector(".main-header__button--cart span");
            const countTitle = cart.querySelector(".cart__title span");
            cartButtonCount.textContent = countTitle.textContent = countItems > 0 ? countItems : "0";
        }
    };
    const updateTotalPrice = cart => {
        const totalPrice = cart.querySelector(".cart__total-price");
        const cartItems = cart.querySelectorAll(".cart__item");
        if (!cartItems.length) {
            totalPrice.textContent = "$0.00";
            return;
        }
        const price = Array.from(cartItems).map((item => {
            const productPrice = item.querySelector(".product-item__price");
            const {nowPrice, oldPrice} = productPrice.dataset;
            const quantityInputValue = item.querySelector("[data-quantity-value]").value;
            const totalPrice = oldPrice ? oldPrice * +quantityInputValue : nowPrice * +quantityInputValue;
            productPrice.querySelectorAll("span").forEach((itemPrice => itemPrice.textContent = `$${totalPrice.toFixed(2)}`));
            return totalPrice;
        })).reduce(((acc, price) => acc + price));
        totalPrice.textContent = `$${price.toFixed(2)}`;
    };
    const updateProductButton = product => {
        if (!product) return;
        const productButton = product.querySelector(".product__button") || document.querySelector(`.product[data-product-id="${product.dataset.productId}"] .product__button`);
        if (!productButton) return;
        const productCart = document.querySelector(`.product-item[data-product-id="${product.dataset.productId}"]`);
        if (productCart) {
            productButton.classList.add("product__button--active");
            productButton.querySelector("span").textContent = "Added to cart";
        } else {
            productButton.classList.remove("product__button--active");
            productButton.querySelector("span").textContent = "Add to cart";
        }
    };
    const productCartObject = product => {
        const productId = product.dataset.productId;
        const category = product.dataset.category;
        const productTitle = product.querySelector(".product__title-link").textContent;
        const productImage = product.querySelector(".content-product__image img").getAttribute("src");
        const productPrice = {
            price: product.querySelector(".product__price").getAttribute("data-price"),
            discountPrice: product.querySelector(".product__price").getAttribute("data-discount-price")
        };
        const color = product.querySelector(".colors-product__link--active .colors-product__color");
        const sizeInputChecked = Array.from(product.querySelectorAll(".sizes-product__input")).find((input => input.checked));
        const size = sizeInputChecked?.nextElementSibling?.textContent.trim();
        const link = product.querySelector(".product__title-link").getAttribute("href");
        return {
            productId,
            category,
            productTitle,
            productImage,
            productPrice,
            color: color ? color.getAttribute("data-color") : null,
            size,
            link
        };
    };
    const cartActions = e => {
        const {target} = e;
        const cart = document.querySelector("[data-cart]");
        if (!cart) return;
        cartToggle(target);
        if (target.closest(".product__button")) {
            const productButton = target.closest(".product__button");
            if (productButton.classList.contains("product__button--active")) return;
            const product = target.closest(".product");
            const cartList = cart.querySelector(".cart__list");
            const productItem = productCartObject(product);
            cartList.insertAdjacentHTML("beforeend", productCartHTML(productItem));
            updateProductButton(product);
            updateCartCountItems(cart);
            updateTotalPrice(cart);
        }
        if (target.closest(".product-item__remove")) {
            const productItem = target.closest(".cart__item");
            const productCart = productItem.querySelector(".product-cart");
            productItem.remove();
            updateProductButton(productCart);
            updateCartCountItems(cart);
            updateTotalPrice(cart);
        }
    };
    const saveCartToLocalStorage = cart => {
        const cartItems = Array.from(cart.querySelectorAll(".cart__item")).map((item => {
            const productCart = item.querySelector(".product-item");
            const quantityInputValue = item.querySelector("[data-quantity-value]").value || 1;
            return {
                productId: productCart.dataset.productId,
                category: productCart.dataset.category,
                productTitle: productCart.querySelector(".info-product__title span").textContent,
                productImage: productCart.querySelector(".product-item__image img").getAttribute("src"),
                productPrice: {
                    price: productCart.querySelector(".product-item__price").getAttribute("data-now-price"),
                    discountPrice: productCart.querySelector(".product-item__price").getAttribute("data-old-price") || null
                },
                quantity: quantityInputValue,
                color: productCart.querySelector(".info-product__color span")?.textContent || null,
                size: productCart.querySelector(".info-product__size span")?.textContent || null,
                link: productCart.querySelector(".info-product__title").getAttribute("href")
            };
        }));
        setItemToLocalStorage("cart", cartItems);
    };
    const loadCartFromLocalStorage = () => {
        const cartData = getItemFromLocalStorage("cart") || [];
        const cart = document.querySelector("[data-cart]");
        if (cartData.length && cart) {
            const cartList = document.querySelector(".cart__list");
            cartData.forEach((productItem => {
                cartList.insertAdjacentHTML("beforeend", productCartHTML(productItem));
                updateProductButton(document.querySelector(`.product[data-product-id="${productItem.productId}"]`));
            }));
            updateCartCountItems(cart);
            updateTotalPrice(cart);
        }
    };
    window.addEventListener("load", (() => loadCartFromLocalStorage()));
    document.addEventListener("click", (e => {
        const cart = document.querySelector("[data-cart]");
        cartActions(e);
        saveCartToLocalStorage(cart);
    }));
    const formQuantity = () => {
        const quantityActions = e => {
            const {type, target} = e;
            if (!target.closest("[data-quantity]")) return;
            const cart = document.querySelector("[data-cart]");
            if (type === "click") if (target.closest("[data-quantity-plus]") || target.closest("[data-quantity-minus]")) {
                const valueElement = target.closest("[data-quantity]").querySelector("[data-quantity-value]");
                if (!valueElement) return;
                const minQuantity = +valueElement.dataset.quantityMin || 1;
                const maxQuantity = +valueElement.dataset.quantityMax || 1 / 0;
                const step = +valueElement.dataset.quantityStep;
                let value = parseInt(valueElement.value) || minQuantity;
                if (target.hasAttribute("data-quantity-plus")) {
                    step && step > 0 ? value += step : value++;
                    if (maxQuantity && value > maxQuantity) value = maxQuantity;
                } else {
                    step && step > 0 ? value -= step : value--;
                    if (minQuantity && value < minQuantity) value = minQuantity; else if (!minQuantity && value < 1) value = 1;
                }
                valueElement.value = value;
                if (cart) updateTotalPrice(cart);
            }
            if (type === "input") {
                if (!target.closest("[data-quantity-value]")) return;
                const valueElement = target.closest("[data-quantity-value]");
                if (/[^0-9]/gi.test(valueElement.value)) valueElement.value = 1;
            }
            if (type === "focusout") {
                if (!target.closest("[data-quantity-value]")) return;
                const valueElement = target.closest("[data-quantity-value]");
                const minQuantity = +valueElement.dataset.quantityMin || 1;
                const maxQuantity = +valueElement.dataset.quantityMax || 1 / 0;
                const step = +valueElement.dataset.quantityStep;
                let value = parseInt(valueElement.value);
                if (isNaN(value) || value <= 1) {
                    valueElement.value = minQuantity || 1;
                    return;
                }
                if (step && step > 0 && value % step !== 0) {
                    value = Math.round(value / step) * step;
                    valueElement.value = value;
                    return;
                }
                if (minQuantity && value < minQuantity) valueElement.value = minQuantity;
                if (maxQuantity && value > maxQuantity) valueElement.value = maxQuantity;
                if (cart) updateTotalPrice(cart);
            }
        };
        document.addEventListener("click", quantityActions);
        document.addEventListener("input", quantityActions);
        document.addEventListener("focusout", quantityActions);
    };
    const pagination = () => {
        const pagination = document.querySelectorAll("[data-pagination]");
        if (!pagination.length) return;
        const paginationArray = Array.from(pagination).filter((item => !item.dataset.pagination.split(",")[0]));
        if (paginationArray.length > 0) initPagination(paginationArray);
        let mdQueriesArray = dataMediaQueries(pagination, "pagination");
        if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
            mdQueriesItem.matchMedia.addEventListener("change", (() => {
                initPagination(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            initPagination(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        }));
        function initPagination(paginationElementArray) {
            let matchMedia = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            paginationElementArray.forEach((paginationElement => {
                paginationElement = matchMedia ? paginationElement.item : paginationElement;
                if (matchMedia.matches || !matchMedia) {
                    paginationElement.classList.add("pagination-init");
                    updatePaginationContent(paginationElement);
                } else {
                    paginationElement.classList.remove("pagination-init");
                    updatePaginationContent(paginationElement, false);
                }
            }));
            function updatePaginationContent(paginationElement) {
                let updatePagination = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                const paginationList = paginationElement.querySelector(".pagination__list");
                const paginationItems = paginationList.querySelectorAll(".pagination__item");
                const paginationArrowPrev = paginationElement.querySelector(".pagination__arrow--prev");
                const paginationArrowNext = paginationElement.querySelector(".pagination__arrow--next");
                const activeIndex = Array.from(paginationItems).findIndex((item => item.classList.contains("pagination__item--active")));
                if (paginationArrowPrev) paginationArrowPrev.style.display = activeIndex === 0 ? "none" : "";
                if (paginationArrowNext) paginationArrowNext.style.display = activeIndex === paginationItems.length - 1 ? "none" : "";
                paginationItems.forEach((item => item.style.display = "none"));
                !updatePagination ? paginationItems[0].style.display = "" : paginationItems[activeIndex].style.display = "";
                paginationItems[paginationItems.length - 1].style.display = "";
                const start = Math.max(1, !updatePagination ? activeIndex - 1 : activeIndex);
                const end = Math.min(paginationItems.length - 2, !updatePagination ? activeIndex + 2 : activeIndex);
                for (let i = start; i <= end; i++) paginationItems[i].style.display = "";
                paginationList.querySelectorAll(".pagination__dots").forEach((el => el.remove()));
                if (start > 1) {
                    const dots = document.createElement("li");
                    dots.className = "pagination__dots";
                    !updatePagination ? dots.textContent = "..." : dots.style.display = "none";
                    paginationList.insertBefore(dots, paginationItems[start]);
                }
                const beforeLast = !updatePagination ? 2 : 1;
                if (end < paginationItems.length - beforeLast) {
                    const dots = document.createElement("li");
                    dots.className = "pagination__dots";
                    !updatePagination ? dots.textContent = "..." : dots.textContent = "/";
                    updatePagination && paginationItems.length === activeIndex + 1 ? dots.style.display = "none" : paginationList.insertBefore(dots, paginationItems[paginationItems.length - 1]);
                }
            }
        }
    };
    function accordion() {
        const accordionsRegular = document.querySelectorAll("[data-accordions]");
        if (!accordionsRegular.length) return;
        const accordionsArray = Array.from(accordionsRegular).filter((item => !item.dataset.accordions.split(",")[0]));
        if (accordionsArray.length > 0) initAccordions(accordionsArray);
        let mdQueriesArray = dataMediaQueries(accordionsRegular, "accordions");
        if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
            mdQueriesItem.matchMedia.addEventListener("change", (() => {
                initAccordions(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            initAccordions(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        }));
        function initAccordions(accordionsArray) {
            let matchMedia = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            accordionsArray.forEach((accordionBlock => {
                accordionBlock = matchMedia ? accordionBlock.item : accordionBlock;
                if (matchMedia.matches || !matchMedia) {
                    accordionBlock.classList.add("accordion-init");
                    initAccordionContent(accordionBlock);
                } else {
                    accordionBlock.classList.remove("accordion-init");
                    initAccordionContent(accordionBlock, false);
                }
            }));
        }
        function initAccordionContent(accordionBlock) {
            let hideAccrdionContent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            const accordionItems = accordionBlock.querySelectorAll("details");
            if (accordionItems.length > 0) accordionItems.forEach((accordionItem => {
                const accordionControl = accordionItem.querySelector("summary");
                if (hideAccrdionContent) {
                    accordionControl.removeAttribute("tabindex");
                    if (!accordionItem.hasAttribute("data-open")) {
                        accordionItem.open = false;
                        accordionControl.nextElementSibling.hidden = true;
                        updateAccordionAttributes(accordionControl);
                    } else {
                        accordionControl.classList.add("is-active");
                        accordionItem.open = true;
                        updateAccordionAttributes(accordionControl, true);
                    }
                } else {
                    accordionControl.setAttribute("tabindex", "-1");
                    accordionControl.classList.remove("is-active");
                    accordionItem.open = true;
                    accordionControl.nextElementSibling.hidden = false;
                    updateAccordionAttributes(accordionControl, true);
                }
            }));
        }
        document.addEventListener("click", accordionAction);
        function accordionAction(e) {
            const {target} = e;
            if (target.closest("summary") && target.closest("[data-accordions]")) {
                e.preventDefault();
                if (target.closest("[data-accordions]").classList.contains("accordion-init")) {
                    const accordionControl = target.closest("summary");
                    const accordionBlock = accordionControl.closest("details");
                    const accordionParent = accordionControl.closest("[data-accordions]");
                    const oneAccordion = accordionParent.hasAttribute("data-one-accordion");
                    const scrollAccordion = accordionBlock.hasAttribute("data-accordion-scroll");
                    const accordionDuration = getAccordionDuration(accordionParent);
                    if (!accordionParent.querySelectorAll(".slide").length) {
                        if (oneAccordion && !accordionBlock.open) hideAccordionContent(accordionParent);
                        !accordionBlock.open ? accordionBlock.open = true : setTimeout((() => accordionBlock.open = false), accordionDuration);
                        accordionControl.classList.toggle("is-active");
                        _slideToggle(accordionControl.nextElementSibling, accordionDuration);
                        accordionControl.classList.contains("is-active") ? updateAccordionAttributes(accordionControl, true) : updateAccordionAttributes(accordionControl);
                        if (scrollAccordion && accordionControl.classList.contains("is-active")) setScrollAccordion(accordionBlock);
                    }
                }
            }
            if (!target.closest("[data-accordions]")) {
                const accordionsClose = document.querySelectorAll("[data-accordion-close]");
                if (accordionsClose.length > 0) accordionsClose.forEach((accordionClose => {
                    const accordionParent = accordionClose.closest("[data-accordions]");
                    const accordionCloseBlock = accordionClose.parentNode;
                    if (accordionParent.classList.contains("accordion-init")) {
                        const accordionDuration = getAccordionDuration(accordionParent);
                        accordionClose.classList.remove("is-active");
                        _slideUp(accordionClose.nextElementSibling, accordionDuration);
                        setTimeout((() => accordionCloseBlock.open = false), accordionDuration);
                        updateAccordionAttributes(accordionClose);
                    }
                }));
            }
        }
        function hideAccordionContent(accordionParent) {
            const accordionActiveBlock = accordionParent.querySelector("details[open]");
            if (accordionActiveBlock && !accordionParent.querySelectorAll(".slide").length) {
                const accordionActiveControl = accordionActiveBlock.querySelector("summary");
                const accordionDuration = getAccordionDuration(accordionParent);
                accordionActiveControl.classList.remove("is-active");
                _slideUp(accordionActiveControl.nextElementSibling, accordionDuration);
                setTimeout((() => accordionActiveBlock.open = false), accordionDuration);
                updateAccordionAttributes(accordionActiveControl);
            }
        }
        function setScrollAccordion(accordionBlock) {
            const scrollAccordionValue = accordionBlock.dataset.accordionScroll;
            const scrollAccordionOffset = scrollAccordionValue ? +scrollAccordionValue : 0;
            const scrollAccordionNoHeader = accordionBlock.hasAttribute("data-accordion-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
            window.scrollTo({
                top: accordionBlock.offsetTop - (scrollAccordionOffset + scrollAccordionNoHeader),
                behavior: "smooth"
            });
        }
        function getAccordionDuration(accordionParent) {
            return +accordionParent.dataset.accordionDuration || 500;
        }
        function updateAccordionAttributes(accordionControl) {
            let isOpen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            const ariaExpanded = isOpen ? "true" : "false";
            const ariaHidden = isOpen ? "false" : "true";
            accordionControl.setAttribute("aria-expanded", ariaExpanded);
            accordionControl.nextElementSibling.setAttribute("aria-hidden", ariaHidden);
        }
    }
    function tabs() {
        const tabs = document.querySelectorAll("[data-tabs]");
        if (!tabs.length) return;
        const hash = getHash();
        let tabsActiveHash = hash && hash.startsWith("tab-") ? hash.replace("tab-", "").split("-") : [];
        tabs.forEach(((tabsBlock, index) => {
            initTabs(tabsBlock, index);
            tabsBlock.addEventListener("click", tabsAction);
            tabsBlock.addEventListener("keydown", keyDownAction);
        }));
        let mdQueriesArray = dataMediaQueries(tabs, "tabs");
        if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
            mdQueriesItem.matchMedia.addEventListener("change", (() => {
                updateControlPosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            updateControlPosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        }));
        function updateControlPosition(tabsMediaArray, matchMedia) {
            tabsMediaArray.forEach((tabsMediaItem => {
                tabsMediaItem = tabsMediaItem.item;
                const tabsControl = tabsMediaItem.querySelector("[data-tabs-controls]");
                const tabsControls = tabsMediaItem.querySelectorAll("[data-tabs-control]");
                const tabsContent = tabsMediaItem.querySelector("[data-tabs-content]");
                const tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                const tabsControlArray = Array.from(tabsControls).filter((tabControl => tabControl.closest("[data-tabs]") === tabsMediaItem));
                const tabsContentArray = Array.from(tabsContentItems).filter((tabContentItem => tabContentItem.closest("[data-tabs]") === tabsMediaItem));
                tabsContentArray.forEach(((tabsContentItem, index) => {
                    if (matchMedia.matches) {
                        tabsContent.append(tabsControlArray[index]);
                        tabsContent.append(tabsContentItem);
                        tabsMediaItem.classList.add("tab-accordion");
                    } else {
                        tabsControl.append(tabsControlArray[index]);
                        tabsMediaItem.classList.remove("tab-accordion");
                    }
                }));
            }));
        }
        function initTabs(tabsBlock, index) {
            tabsBlock.classList.add("tab-init");
            tabsBlock.setAttribute("data-tabs-index", index);
            const tabsControlNavigation = tabsBlock.querySelector("[data-tabs-controls]");
            const tabsControlButtons = tabsBlock.querySelectorAll("[data-tabs-controls]>*");
            const tabsContentItems = tabsBlock.querySelectorAll("[data-tabs-content]>*");
            const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
            const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
            if (tabsActiveHashBlock) {
                const tabControlActive = tabsBlock.querySelector("[data-tabs-controls]>.is-active");
                if (tabControlActive) tabControlActive.classList.remove("is-active");
            }
            tabsControlNavigation.setAttribute("role", "tablist");
            tabsContentItems.forEach(((tabsContentItem, index) => {
                tabsControlButtons[index].setAttribute("data-tabs-control", "");
                tabsControlButtons[index].setAttribute("role", "tab");
                tabsControlButtons[index].setAttribute("id", `${tabsBlock.classList[0]}${index + 1}`);
                tabsControlButtons[index].setAttribute("aria-selected", true);
                tabsContentItem.setAttribute("role", "tabpanel");
                tabsContentItem.setAttribute("data-tabs-item", "");
                tabsContentItem.setAttribute("aria-labelledby", tabsControlButtons[index].id);
                if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsControlButtons[index].classList.add("is-active");
                if (!tabsControlButtons[index].classList.contains("is-active")) {
                    tabsContentItem.hidden = true;
                    tabsContentItem.setAttribute("tabindex", "-1");
                    tabsControlButtons[index].setAttribute("tabindex", "-1");
                    tabsControlButtons[index].setAttribute("aria-selected", false);
                }
            }));
        }
        function updateTabsStatus(tabsBlock) {
            const tabsControls = tabsBlock.querySelectorAll("[data-tabs-control]");
            const tabsContentItems = tabsBlock.querySelectorAll("[data-tabs-item]");
            const tabsBlockAnimateDuration = getTabsAnimateDuration(tabsBlock);
            const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
            if (tabsContentItems.length > 0) {
                const tabsContentArray = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsBlock));
                const tabsControlsArray = Array.from(tabsControls).filter((item => item.closest("[data-tabs]") === tabsBlock));
                const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                tabsContentArray.forEach(((tabsContentItem, index) => {
                    if (tabsControlsArray[index].classList.contains("is-active")) {
                        tabsContentItem.removeAttribute("tabindex");
                        contentTabsToggle(tabsContentItem, tabsBlockAnimateDuration);
                        if (isHash && !tabsContentItem.closest(".modal")) setHash(`tab-${tabsBlockIndex}-${index}`);
                    } else {
                        tabsContentItem.setAttribute("tabindex", "-1");
                        contentTabsToggle(tabsContentItem, tabsBlockAnimateDuration, false);
                    }
                }));
            }
        }
        function contentTabsToggle(tabsContentItem, animateDuration) {
            let isActive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
            if (isActive) animateDuration ? _slideDown(tabsContentItem, animateDuration) : tabsContentItem.hidden = false; else animateDuration ? _slideUp(tabsContentItem, animateDuration) : tabsContentItem.hidden = true;
        }
        function tabsAction(e) {
            const {target} = e;
            if (!target.closest("[data-tabs-control]")) return;
            const tabControl = target.closest("[data-tabs-control]");
            const tabsBlock = tabControl.closest("[data-tabs]");
            const tabsControlItems = tabsBlock.querySelectorAll("[data-tabs-control]");
            if (!tabControl.classList.contains("is-active") && !tabsBlock.querySelector(".slide")) {
                const [tabActiveControl] = Array.from(tabsControlItems).filter((item => item.classList.contains("is-active") && item.closest("[data-tabs]") === tabsBlock));
                if (tabActiveControl) toggleTabSelected(tabActiveControl);
                toggleTabSelected(tabControl, true);
                updateTabsStatus(tabsBlock);
            }
            e.preventDefault();
        }
        function keyDownAction(e) {
            const {target, key} = e;
            if (!target.closest("[data-tabs-control]")) return;
            const tabControl = target.closest("[data-tabs-control]");
            const tabsBlock = tabControl.closest("[data-tabs]");
            const tabsControls = [ ...tabsBlock.querySelectorAll("[data-tabs-control]") ];
            if (tabControl.classList.contains("is-active") && !tabsBlock.querySelector(".slide")) {
                const currentIndex = tabsControls.findIndex((itemIndex => itemIndex === tabControl));
                const [tabActiveControl] = tabsControls.filter((item => item.classList.contains("is-active") && item.closest("[data-tabs]") === tabsBlock));
                let nextIndex;
                if (key === "ArrowRight" || key === "ArrowDown") nextIndex = currentIndex === tabsControls.length - 1 ? 0 : currentIndex + 1; else if (key === "ArrowLeft" || key === "ArrowUp") nextIndex = currentIndex === 0 ? tabsControls.length - 1 : currentIndex - 1; else return;
                if (tabActiveControl) toggleTabSelected(tabActiveControl);
                toggleTabSelected(tabsControls[nextIndex], true);
                tabsControls[nextIndex].focus();
                updateTabsStatus(tabsBlock);
            }
        }
        function getTabsAnimateDuration(tabsBlock) {
            if (tabsBlock.hasAttribute("data-tabs-animate")) return +tabsBlock.dataset.tabsAnimate || 500;
        }
        function toggleTabSelected(tabControl) {
            let isActive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            !isActive ? tabControl.setAttribute("tabindex", "-1") : tabControl.removeAttribute("tabindex");
            tabControl.setAttribute("aria-selected", `${!isActive ? false : true}`);
            tabControl.classList.toggle("is-active");
        }
    }
    const starRating = () => {
        const starBlocks = document.querySelectorAll(".star-rating");
        if (!starBlocks.length) return;
        starBlocks.forEach((block => {
            const rating = parseInt(block.dataset.rating, 10) || 0;
            const stars = block.querySelectorAll("img");
            stars.forEach(((star, index) => {
                if (index < rating) star.src = "img/icons/star-active.svg"; else star.src = "img/icons/star.svg";
                star.alt = "";
            }));
            block.setAttribute("aria-label", `Rating: ${rating} out of 5`);
        }));
    };
    const sidebarToggle = () => {
        const sidebar = document.querySelector("aside.aside-blog");
        if (!sidebar) return;
        const sidebarAction = e => {
            const {target} = e;
            if (target.closest(".sidebar-button") && bodyLockStatus) {
                sidebar.classList.toggle("is-open");
                document.documentElement.classList.toggle("aside-active");
                bodyLockToggle();
                return;
            }
            if (!target.closest("aside.aside-blog") && sidebar.classList.contains("is-open")) {
                sidebar.classList.remove("is-open");
                document.documentElement.classList.remove("aside-active");
                bodyLockToggle();
                return;
            }
        };
        document.addEventListener("click", sidebarAction);
    };
    const objectModules = {};
    class ScrollWatcher {
        constructor(options) {
            let defaultConfig = {
                logging: true,
                init: true
            };
            this.config = {
                ...defaultConfig,
                ...options
            };
            this.observer;
            if (this.config.init && !document.documentElement.classList.contains("watcher")) this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
            this.scrollWatcherRun();
        }
        scrollWatcherRun() {
            document.documentElement.classList.add("watcher");
            this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
        }
        scrollWatcherConstructor(watchItems) {
            if (!watchItems.length) {
                this.#scrollWatcherLogging("There are no objects to observe.");
                return;
            }
            this.#scrollWatcherLogging(`I follow the objects (${watchItems.length})...`);
            const uniqParams = uniqArray(Array.from(watchItems).map((item => {
                if (item.dataset.watch === "navigator" && !item.dataset.watchThreshold) {
                    let valueOfThreshold;
                    if (item.clientHeight > 2) {
                        valueOfThreshold = window.innerHeight / 2 / (item.clientHeight - 1);
                        if (valueOfThreshold > 1) valueOfThreshold = 1;
                    } else valueOfThreshold = 1;
                    item.setAttribute("data-watch-threshold", valueOfThreshold.toFixed(2));
                }
                let {watchRoot, watchMargin, watchThreshold} = item.dataset;
                return `${watchRoot || null}|${watchMargin || "0px"}|${watchThreshold || 0}`;
            })));
            uniqParams.forEach((uniqParam => {
                const [rootParam, marginParam, thresholdParam] = uniqParam.split("|");
                const paramsWatch = {
                    root: rootParam,
                    margin: marginParam,
                    threshold: thresholdParam
                };
                const groupItems = Array.from(watchItems).filter((item => {
                    let {watchRoot, watchMargin, watchThreshold} = item.dataset;
                    watchRoot = watchRoot ? watchRoot : null;
                    watchMargin = watchMargin ? watchMargin : "0px";
                    watchThreshold = watchThreshold ? watchThreshold : 0;
                    if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                }));
                let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                this.scrollWatcherInit(groupItems, configWatcher);
            }));
        }
        getScrollWatcherConfig(paramsWatch) {
            const {root, margin, threshold} = paramsWatch;
            let configWatcher = {};
            if (document.querySelector(root)) configWatcher.root = document.querySelector(root); else if (root !== "null") this.#scrollWatcherLogging(`The parent object ${root} does not exist on the page`);
            configWatcher.rootMargin = margin;
            if (margin.indexOf("px") < 0 && margin.indexOf("%") < 0) {
                this.#scrollWatcherLogging(`The data-watch-margin setting must be set in PX or %`);
                return;
            }
            function prxArrThreshold(arr) {
                arr = [];
                for (let i = 0; i <= 1; i += .005) arr.push(i);
                return arr;
            }
            const thresholdArray = threshold === "prx" ? prxArrThreshold(threshold) : threshold.split(",");
            configWatcher.threshold = thresholdArray;
            return configWatcher;
        }
        scrollWatcherInit(items, configWatcher) {
            this.scrollWatcherCreate(configWatcher);
            items.forEach((item => this.observer.observe(item)));
        }
        scrollWatcherCreate(configWatcher) {
            this.observer = new IntersectionObserver(((entries, observer) => {
                entries.forEach((entry => {
                    this.scrollWatcherCallback(entry, observer);
                }));
            }), configWatcher);
        }
        scrollWatcherCallback(entry, observer) {
            const {target, isIntersecting} = entry;
            this.scrollWatcherIntersecting(isIntersecting, target);
            target.hasAttribute("data-watch-once") && isIntersecting ? this.scrollWatcherOff(target, observer) : null;
            document.dispatchEvent(new CustomEvent("watcherCallback", {
                detail: {
                    entry
                }
            }));
        }
        scrollWatcherIntersecting(isIntersecting, target) {
            if (isIntersecting) {
                !target.classList.contains("watcher-view") ? target.classList.add("watcher-view") : null;
                this.#scrollWatcherLogging(`I see ${target.classList}, added watcher-view class`);
            } else {
                target.classList.contains("watcher-view") ? target.classList.remove("watcher-view") : null;
                this.#scrollWatcherLogging(`I don't see ${target.classList}, I removed the watcher-view class`);
            }
        }
        scrollWatcherOff(target, observer) {
            observer.unobserve(target);
            this.#scrollWatcherLogging(`I stopped following ${target.classList}`);
        }
        #scrollWatcherLogging(message) {
            this.config.logging ? FLS(`[Watcher]: ${message}`) : null;
        }
    }
    objectModules.scrollWatcher = new ScrollWatcher({});
    const filter = document.querySelector("[data-filter]");
    if (filter) {
        filter.classList.add("is-hidden");
        const filterList = document.querySelector(".list-filter");
        if (filterList) checkFilterListItems();
        document.addEventListener("click", filterAction);
        const mediaQuery = window.matchMedia("(min-width: 1230px)");
        function handleViewportChange(e) {
            if (!document.documentElement.classList.contains("show-filter")) return;
            if (e.matches) bodyUnlock(); else bodyLock();
        }
        mediaQuery.addEventListener("change", handleViewportChange);
        function filterAction(e) {
            if (e.target.closest("[data-filter-button]")) {
                const filterButton = e.target.closest("[data-filter-button]");
                filter.classList.toggle("is-hidden");
                document.documentElement.classList.toggle("show-filter");
                filter.classList.contains("is-hidden") ? filterButton.querySelector("span").textContent = "Show filters" : filterButton.querySelector("span").textContent = "Hide filters";
                if (!isPCViewPort() && bodyLockStatus) bodyLockToggle(); else bodyUnlock();
                return;
            }
            if (e.target.closest("[data-filter-close]") && document.documentElement.classList.contains("show-filter")) {
                filter.classList.add("is-hidden");
                document.documentElement.classList.remove("show-filter");
                if (!isPCViewPort() && document.documentElement.classList.contains("lock")) bodyUnlock();
                return;
            }
            if (!isPCViewPort() && !e.target.closest("[data-filter]") && document.documentElement.classList.contains("show-filter")) {
                filter.classList.add("is-hidden");
                document.documentElement.classList.remove("show-filter");
                if (document.documentElement.classList.contains("lock")) bodyUnlock();
                return;
            }
            if (e.target.closest("[data-filter]") && !e.target.closest("[data-filter-button]")) {
                const label = e.target.closest(".checkbox__label");
                if (label) {
                    const checkboxValue = label.childNodes[0].textContent.trim();
                    const alreadyExists = [ ...filterList.children ].some((el => el.textContent.trim() === checkboxValue));
                    if (!alreadyExists) {
                        filterList?.insertAdjacentHTML("beforeend", createButtonFilterHTML(checkboxValue));
                        checkFilterListItems();
                    } else {
                        const filterItem = [ ...filterList.children ].find((el => el.textContent.trim() === checkboxValue));
                        if (filterItem) {
                            filterItem.remove();
                            checkFilterListItems();
                        }
                    }
                }
            }
            if (e.target.closest(".list-filter__button") && !e.target.closest("[data-clear-all]")) {
                const button = e.target.closest(".list-filter__button");
                const buttonText = button.querySelector("span").textContent.trim();
                const filterItem = [ ...filterList.children ].find((el => el.textContent.trim() === buttonText));
                if (filterItem) {
                    filterItem.remove();
                    checkFilterListItems();
                    checkCheckBoxChecked(buttonText);
                }
            }
            if (e.target.closest("[data-clear-all]")) {
                const filterItems = [ ...filterList.children ];
                filterItems.forEach(((item, index) => index !== 0 ? item.remove() : null));
                checkFilterListItems();
                const checkboxes = document.querySelector(".filter__blocks").querySelectorAll(".checkbox__input");
                checkboxes.forEach((checkbox => checkbox.checked = false));
            }
        }
        function checkFilterListItems() {
            if (filterList) [ ...filterList.children ].forEach((el => {
                if (filterList.children.length === 1) el.style.display = "none"; else el.style.display = "";
            }));
        }
        function createButtonFilterHTML(checkboxValue) {
            return `<li class="list-filter__item">\n              <button class="list-filter__button">\n                <svg>\n                 <use xlink:href="img/sprite/icons.svg#cross"></use>\n              </svg>\n               <span>${checkboxValue}</span>\n              </button>\n            </li>`;
        }
        function checkCheckBoxChecked(text) {
            const checkboxes = document.querySelector(".filter__blocks").querySelectorAll(".checkbox__input");
            checkboxes.forEach((checkbox => {
                const label = checkbox.nextElementSibling;
                if (label) {
                    const labelText = label.childNodes[0].textContent.trim();
                    if (labelText === text && checkbox.checked) checkbox.checked = false;
                }
            }));
        }
    }
    var PipsMode;
    (function(PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(PipsMode || (PipsMode = {}));
    var PipsType;
    (function(PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(PipsType || (PipsType = {}));
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== void 0;
    }
    function preventDefault(e) {
        e.preventDefault();
    }
    function unique(array) {
        return array.filter((function(a) {
            return !this[a] ? this[a] = true : false;
        }), {});
    }
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout((function() {
                removeClass(element, className);
            }), duration);
        }
    }
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    function asArray(a) {
        return Array.isArray(a) ? a : [ a ];
    }
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
    }
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== void 0;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
        return {
            x,
            y
        };
    }
    function getActions() {
        return window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        };
    }
    function getSupportsPassive() {
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("test", null, opts);
        } catch (e) {}
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    function fromPercentage(range, value, startRange) {
        return value * 100 / (range[startRange + 1] - range[startRange]);
    }
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    function isPercentage(range, value) {
        return value * (range[1] - range[0]) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) j += 1;
        return j;
    }
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) return 100;
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
    }
    function fromStepping(xVal, xPct, value) {
        if (value >= 100) return xVal.slice(-1)[0];
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
    }
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) return value;
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        if (snap) {
            if (value - a > (b - a) / 2) return b;
            return a;
        }
        if (!xSteps[j - 1]) return value;
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    var Spectrum = function() {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [ singleStep || false ];
            this.xNumSteps = [ false ];
            this.snap = snap;
            var index;
            var ordered = [];
            Object.keys(entry).forEach((function(index) {
                ordered.push([ asArray(entry[index]), index ]);
            }));
            ordered.sort((function(a, b) {
                return a[0][0] - b[0][0];
            }));
            for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            this.xNumSteps = this.xSteps.slice(0);
            for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
        }
        Spectrum.prototype.getDistance = function(value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
            return distances;
        };
        Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
            var xPct_index = 0;
            if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
            if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
            if (distances === null) distances = [];
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            while (rest_rel_distance > 0) {
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    rel_range_distance = range_pct * start_factor;
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    start_factor = 1;
                } else {
                    rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter -= rel_range_distance;
                    if (this.xPct.length + range_counter >= 1) range_counter--;
                } else {
                    abs_distance_counter += rel_range_distance;
                    if (this.xPct.length - range_counter >= 1) range_counter++;
                }
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function(value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function(value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function(value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
            var j = getJ(value, this.xPct);
            if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function(value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function() {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function() {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        Spectrum.prototype.convert = function(value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function(index, value) {
            var percentage;
            if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
            if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            if (!percentage) {
                if (!isNaN(value1)) this.xSteps[0] = value1;
            } else this.xSteps.push(isNaN(value1) ? false : value1);
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function(i, n) {
            if (!n) return;
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }();
    var defaultFormatter = {
        to: function(value) {
            return value === void 0 ? "" : value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
        if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
        parsed.handles = entry.length;
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [ false ];
        var i;
        if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) connect.push(entry);
            connect.push(false);
        } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        switch (entry) {
          case "horizontal":
            parsed.ort = 0;
            break;

          case "vertical":
            parsed.ort = 1;
            break;

          default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (entry === 0) return;
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (entry === 0) return;
        if (!Array.isArray(entry)) entry = [ entry, entry ];
        parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
    function testDirection(parsed, entry) {
        switch (entry) {
          case "ltr":
            parsed.dir = 0;
            break;

          case "rtl":
            parsed.dir = 1;
            break;

          default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var invertConnects = entry.indexOf("invert-connects") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (invertConnects && parsed.handles !== 2) throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
        if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        parsed.events = {
            tap: tap || snap,
            drag,
            dragAll,
            smoothSteps,
            fixed,
            snap,
            hover,
            unconstrained,
            invertConnects
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) return;
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
        } else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
            entry.forEach((function(formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }));
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach((function(key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }));
        } else parsed.cssClasses = entry;
    }
    function testOptions(options) {
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        var tests = {
            step: {
                r: false,
                t: testStep
            },
            keyboardPageMultiplier: {
                r: false,
                t: testKeyboardPageMultiplier
            },
            keyboardMultiplier: {
                r: false,
                t: testKeyboardMultiplier
            },
            keyboardDefaultStep: {
                r: false,
                t: testKeyboardDefaultStep
            },
            start: {
                r: true,
                t: testStart
            },
            connect: {
                r: true,
                t: testConnect
            },
            direction: {
                r: true,
                t: testDirection
            },
            snap: {
                r: false,
                t: testSnap
            },
            animate: {
                r: false,
                t: testAnimate
            },
            animationDuration: {
                r: false,
                t: testAnimationDuration
            },
            range: {
                r: true,
                t: testRange
            },
            orientation: {
                r: false,
                t: testOrientation
            },
            margin: {
                r: false,
                t: testMargin
            },
            limit: {
                r: false,
                t: testLimit
            },
            padding: {
                r: false,
                t: testPadding
            },
            behaviour: {
                r: true,
                t: testBehaviour
            },
            ariaFormat: {
                r: false,
                t: testAriaFormat
            },
            format: {
                r: false,
                t: testFormat
            },
            tooltips: {
                r: false,
                t: testTooltips
            },
            keyboardSupport: {
                r: true,
                t: testKeyboardSupport
            },
            documentElement: {
                r: false,
                t: testDocumentElement
            },
            cssPrefix: {
                r: true,
                t: testCssPrefix
            },
            cssClasses: {
                r: true,
                t: testCssClasses
            },
            handleAttributes: {
                r: false,
                t: testHandleAttributes
            }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10
        };
        if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
        Object.keys(tests).forEach((function(name) {
            if (!isSet(options[name]) && defaults[name] === void 0) {
                if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        }));
        parsed.pips = options.pips;
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== void 0;
        var noPrefix = d.style.transform !== void 0;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        var scope_Target = target;
        var scope_Base;
        var scope_ConnectBase;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        var scope_ConnectsInverted = false;
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) addClass(div, className);
            addTarget.appendChild(div);
            return div;
        }
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", (function(event) {
                    return eventKeydown(event, handleNumber);
                }));
            }
            if (options.handleAttributes !== void 0) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach((function(attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                }));
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
            origin.handle = handle;
            return origin;
        }
        function addConnect(base, add) {
            if (!add) return false;
            return addNodeTo(base, options.cssClasses.connect);
        }
        function addElements(connectOptions, base) {
            scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
            for (var i = 0; i < options.handles; i++) {
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
            }
        }
        function addSlider(addTarget) {
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
            if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) return false;
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function disable(handleNumber) {
            if (handleNumber !== null && handleNumber !== void 0) {
                scope_Handles[handleNumber].setAttribute("disabled", "");
                scope_Handles[handleNumber].handle.removeAttribute("tabindex");
            } else {
                scope_Target.setAttribute("disabled", "");
                scope_Handles.forEach((function(handle) {
                    handle.handle.removeAttribute("tabindex");
                }));
            }
        }
        function enable(handleNumber) {
            if (handleNumber !== null && handleNumber !== void 0) {
                scope_Handles[handleNumber].removeAttribute("disabled");
                scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
            } else {
                scope_Target.removeAttribute("disabled");
                scope_Handles.forEach((function(handle) {
                    handle.removeAttribute("disabled");
                    handle.handle.setAttribute("tabindex", "0");
                }));
            }
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach((function(tooltip) {
                    if (tooltip) removeElement(tooltip);
                }));
                scope_Tooltips = null;
            }
        }
        function tooltips() {
            removeTooltips();
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) return;
                if (scope_Tooltips[handleNumber] === false) return;
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            }));
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                scope_HandleNumbers.forEach((function(index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                }));
            }));
        }
        function getGroup(pips) {
            if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
            if (pips.mode === PipsMode.Count) {
                if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                while (interval--) values[interval] = interval * spread;
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
            if (pips.mode === PipsMode.Values) {
                if (pips.stepped) return pips.values.map((function(value) {
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                }));
                return pips.values;
            }
            return [];
        }
        function mapToRange(values, stepped) {
            return values.map((function(value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            }));
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            group = unique(group.slice().sort((function(a, b) {
                return a - b;
            })));
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach((function(current, index) {
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === PipsMode.Steps;
                if (isSteps) step = scope_Spectrum.xNumSteps[index];
                if (!step) step = high - low;
                if (high === void 0) high = low;
                step = Math.max(step, 1e-7);
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    stepSize = pctDifference / realSteps;
                    for (q = 1; q <= realSteps; q += 1) {
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                    }
                    type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                    if (!index && ignoreFirst && i !== high) type = 0;
                    if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                    prevPct = newPct;
                }
            }));
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
            _a);
            var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
            _b);
            var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
            var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === PipsType.None) return;
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                if (type > PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            Object.keys(spread).forEach((function(offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            }));
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function(value) {
                    return String(Math.round(value));
                }
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + [ "Width", "Height" ][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        function attachEvent(events, element, callback, data) {
            var method = function(event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                if (!e) return false;
                if (isSliderDisabled() && !data.doNotReject) return false;
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                if (data.hover && e.buttons) return false;
                if (!supportsPassive) e.preventDefault();
                e.calcPoint = e.points[options.ort];
                callback(e, data);
                return;
            };
            var methods = [];
            events.split(" ").forEach((function(eventName) {
                element.addEventListener(eventName, method, supportsPassive ? {
                    passive: true
                } : false);
                methods.push([ eventName, method ]);
            }));
            return methods;
        }
        function fixEvent(e, pageOffset, eventTarget) {
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            if (e.type.indexOf("MSPointer") === 0) pointer = true;
            if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
            if (touch) {
                var isTouchOnTarget = function(checkTouch) {
                    var target = checkTouch.target;
                    return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                };
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    if (targetTouches.length > 1) return false;
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                } else {
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    if (!targetTouch) return false;
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [ x, y ];
            e.cursor = mouse || pointer;
            return e;
        }
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = location * 100 / baseSize();
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach((function(handle, index) {
                if (isHandleDisabled(index)) return;
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            }));
            return handleNumber;
        }
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
        }
        function eventMove(event, data) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            var proposal = movement * 100 / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        function eventEnd(event, data) {
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            data.listeners.forEach((function(c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            }));
            if (scope_ActiveHandlesCount === 0) {
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                }));
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("update", handleNumber);
                }));
            }
            data.handleNumbers.forEach((function(handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            }));
        }
        function eventStart(event, data) {
            if (data.handleNumbers.some(isHandleDisabled)) return;
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                addClass(handle, options.cssClasses.active);
            }
            event.stopPropagation();
            var listeners = [];
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                target: event.target,
                handle,
                connect: data.connect,
                listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle,
                listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle,
                listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            if (event.cursor) {
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach((function(handleNumber) {
                fireEvent("start", handleNumber);
            }));
        }
        function eventTap(event) {
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            if (handleNumber === false) return;
            if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            } else eventStart(event, {
                handleNumbers: [ handleNumber ]
            });
        }
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach((function(targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                    callback.call(scope_Self, value);
                }));
            }));
        }
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
            var horizontalKeys = [ "Left", "Right" ];
            var verticalKeys = [ "Down", "Up" ];
            var largeStepKeys = [ "PageDown", "PageUp" ];
            var edgeKeys = [ "Home", "End" ];
            if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) return true;
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                if (step === null) return false;
                if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                step = Math.max(step, 1e-7);
                step *= isDown ? -1 : 1;
                to = scope_Values[handleNumber] + step;
            } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        function bindSliderEvents(behaviour) {
            if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [ index ]
                });
            }));
            if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
            if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                hover: true
            });
            if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [ connect ];
                var handlesToDrag = [ handleBefore, handleAfter ];
                var handleNumbersToDrag = [ index - 1, index ];
                addClass(connect, options.cssClasses.draggable);
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach((function(eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect
                    });
                }));
            }));
        }
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                fireEvent("update", index);
            }));
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach((function(bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
            }));
        }
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach((function(targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                    callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                }));
            }));
        }
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) to = scope_Spectrum.getStep(to);
            to = limit(to);
            if (to === reference[handleNumber] && !getValue) return false;
            return to;
        }
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [ !upward, upward ];
            var f = [ upward, !upward ];
            handleNumbers = handleNumbers.slice();
            if (upward) handleNumbers.reverse();
            if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                if (to === false) proposal = 0; else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            })); else b = f = [ true ];
            var state = false;
            handleNumbers.forEach((function(handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            }));
            if (state) {
                handleNumbers.forEach((function(handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                }));
                if (connect != void 0) fireEvent("drag", firstHandle);
            }
        }
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        function updateHandlePosition(handleNumber, to) {
            scope_Locations[handleNumber] = to;
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            if (options.events.invertConnects && scope_Locations.length > 1) {
                var handlesAreInOrder = scope_Locations.every((function(position, index, locations) {
                    return index === 0 || position >= locations[index - 1];
                }));
                if (scope_ConnectsInverted !== !handlesAreInOrder) {
                    invertConnects();
                    return;
                }
            }
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
            if (scope_ConnectsInverted) {
                updateConnect(handleNumber - 1);
                updateConnect(handleNumber + 2);
            }
        }
        function setZindex() {
            scope_HandleNumbers.forEach((function(handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            }));
        }
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            if (to === false) return false;
            updateHandlePosition(handleNumber, to);
            return true;
        }
        function updateConnect(index) {
            if (!scope_Connects[index]) return;
            var locations = scope_Locations.slice();
            if (scope_ConnectsInverted) locations.sort((function(a, b) {
                return a - b;
            }));
            var l = 0;
            var h = 100;
            if (index !== 0) l = locations[index - 1];
            if (index !== scope_Connects.length - 1) h = locations[index];
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }
        function resolveToValue(to, handleNumber) {
            if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
            if (typeof to === "number") to = String(to);
            to = options.format.from(to);
            if (to !== false) to = scope_Spectrum.toStepping(to);
            if (to === false || isNaN(to)) return scope_Locations[handleNumber];
            return to;
        }
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === void 0;
            fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
            if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            scope_HandleNumbers.forEach((function(handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            }));
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach((function(handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    }));
                }
            }
            for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            }));
            setZindex();
            scope_HandleNumbers.forEach((function(handleNumber) {
                fireEvent("update", handleNumber);
                if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
            }));
        }
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) fireEvent("set", handleNumber);
        }
        function valueGet(unencoded) {
            if (unencoded === void 0) unencoded = false;
            if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            var values = scope_Values.map(options.format.to);
            if (values.length === 1) return values[0];
            return values;
        }
        function destroy() {
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach((function(key) {
                removeClass(scope_Target, options.cssClasses[key]);
            }));
            while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
            if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
            if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
            if (location === 100) increment = null; else if (location === 0) decrement = null;
            var stepDecimals = scope_Spectrum.countStepDecimals();
            if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
            if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
            return [ decrement, increment ];
        }
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        function updateOptions(optionsToUpdate, fireSetEvent) {
            var v = valueGet();
            var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips", "connect" ];
            updateAble.forEach((function(name) {
                if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
            }));
            var newOptions = testOptions(originalOptions);
            updateAble.forEach((function(name) {
                if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
            }));
            scope_Spectrum = newOptions.spectrum;
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            if (options.pips) pips(options.pips); else removePips();
            if (options.tooltips) tooltips(); else removeTooltips();
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
            if (optionsToUpdate.connect) updateConnectOption();
        }
        function updateConnectOption() {
            while (scope_ConnectBase.firstChild) scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
            for (var i = 0; i <= options.handles; i++) {
                scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
                updateConnect(i);
            }
            bindSliderEvents({
                drag: options.events.drag,
                fixed: true
            });
        }
        function invertConnects() {
            scope_ConnectsInverted = !scope_ConnectsInverted;
            testConnect(options, options.connect.map((function(b) {
                return !b;
            })));
            updateConnectOption();
        }
        function setupSlider() {
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            bindSliderEvents(options.events);
            valueSet(options.start);
            if (options.pips) pips(options.pips);
            if (options.tooltips) tooltips();
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            disable,
            enable,
            __moveHandles: function(upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions,
            target: scope_Target,
            removePips,
            removeTooltips,
            getPositions: function() {
                return scope_Locations.slice();
            },
            getTooltips: function() {
                return scope_Tooltips;
            },
            getOrigins: function() {
                return scope_Handles;
            },
            pips
        };
        return scope_Self;
    }
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
        if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    const rangeInit = () => {
        const priceSlider = document.querySelector("[data-range-slider]");
        if (priceSlider) {
            initialize(priceSlider, {
                start: [ 480, 800 ],
                connect: true,
                step: 1,
                keyboardDefaultStep: 50,
                tooltips: [ {
                    to: value => `$${Math.round(value)}`,
                    from: value => Number(value.replace(/[^\d]/g, ""))
                }, {
                    to: value => `$${Math.round(value)}`,
                    from: value => Number(value.replace(/[^\d]/g, ""))
                } ],
                handleAttributes: [ {
                    "aria-label": "Price lower"
                }, {
                    "aria-label": "Price is higher"
                } ],
                range: {
                    min: [ 10 ],
                    max: [ 1e3 ]
                }
            });
            const priceStart = document.querySelector("[data-range-value-from]");
            const priceEnd = document.querySelector("[data-range-value-to]");
            const inputs = [ priceStart, priceEnd ];
            priceSlider.noUiSlider.on("update", (function(values, handle) {
                inputs[handle].value = Math.round(values[handle]);
            }));
            inputs.forEach(((input, index) => {
                input.addEventListener("change", (_ref => {
                    let {target} = _ref;
                    setPriceValue(index, target.value);
                }));
            }));
            function setPriceValue(index, value) {
                let arr = [ null, null ];
                arr[index] = value;
                priceSlider.noUiSlider.set(arr);
            }
        }
    };
    if (document.querySelector("[data-range]")) window.addEventListener("load", rangeInit);
    const addWishlistButtonClass = button => {
        if (!button.classList.contains("wishlist-active")) button.classList.add("wishlist-active");
        if (button.closest(".product-cart__wishlist")) {
            const productId = button.closest(".product-cart").dataset.productId;
            const productButton = document.querySelector(`.product[data-product-id="${productId}"] .content-product__wishlist`);
            if (productButton && !productButton.classList.contains("wishlist-active")) productButton.classList.add("wishlist-active");
        }
    };
    const saveWishlistToLocalStorage = () => {
        const favoriteProducts = document.querySelectorAll(".content-product__wishlist.wishlist-active");
        const wishlistItems = Array.from(favoriteProducts).map((product => ({
            productId: product.closest(".product").dataset.productId,
            productName: product.closest(".product").querySelector(".product__title-link").textContent.trim(),
            productImage: product.closest(".product").querySelector(".content-product__image img").getAttribute("src"),
            productPrice: {
                price: product.closest(".product").querySelector(".product__price").getAttribute("data-price"),
                discountPrice: product.closest(".product").querySelector(".product__price").getAttribute("data-discount-price") || null
            },
            productLink: product.closest(".product").querySelector(".product__title").href
        })));
        const wishlisCount = document.querySelector(".main-header__button--wishlist span");
        wishlisCount.textContent = wishlistItems.length;
        setItemToLocalStorage("wishlist", wishlistItems);
    };
    const wishListAction = e => {
        const {target} = e;
        if (target.closest(".content-product__wishlist") || target.closest(".product-cart__wishlist")) {
            const product = target.closest(".product") || target.closest(".product-cart");
            const wishlistButton = product.querySelector(".content-product__wishlist") || product.querySelector(".product-cart__wishlist");
            addWishlistButtonClass(wishlistButton);
            saveWishlistToLocalStorage();
        }
    };
    const loadWishlistFromLocalStorage = () => {
        const wishlistData = getItemFromLocalStorage("wishlist") || [];
        const wishlisCount = document.querySelector(".main-header__button--wishlist span");
        if (wishlisCount) wishlisCount.textContent = wishlistData.length;
        if (wishlistData.length === 0) return;
        wishlistData.forEach((product => {
            const productItem = document.querySelector(`.product[data-product-id="${product.productId}"]`);
            const productCart = document.querySelector(`.product-cart[data-product-id="${product.productId}"]`);
            if (!productItem && !productCart) return;
            const wishlistButton = productItem?.querySelector(".content-product__wishlist");
            const wishlistButtonCart = productCart?.querySelector(".product-cart__wishlist");
            wishlistButton?.classList.add("wishlist-active");
            wishlistButtonCart?.classList.add("wishlist-active");
        }));
    };
    window.addEventListener("load", (() => loadWishlistFromLocalStorage()));
    document.addEventListener("click", wishListAction);
    function ssr_window_esm_isObject(obj) {
        return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
    }
    function extend(target, src) {
        if (target === void 0) target = {};
        if (src === void 0) src = {};
        const noExtend = [ "__proto__", "constructor", "prototype" ];
        Object.keys(src).filter((key => noExtend.indexOf(key) < 0)).forEach((key => {
            if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
        }));
    }
    const ssrDocument = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector() {
            return null;
        },
        querySelectorAll() {
            return [];
        },
        getElementById() {
            return null;
        },
        createEvent() {
            return {
                initEvent() {}
            };
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS() {
            return {};
        },
        importNode() {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function ssr_window_esm_getDocument() {
        const doc = typeof document !== "undefined" ? document : {};
        extend(doc, ssrDocument);
        return doc;
    }
    const ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return "";
                }
            };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {};
        },
        requestAnimationFrame(callback) {
            if (typeof setTimeout === "undefined") {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame(id) {
            if (typeof setTimeout === "undefined") return;
            clearTimeout(id);
        }
    };
    function ssr_window_esm_getWindow() {
        const win = typeof window !== "undefined" ? window : {};
        extend(win, ssrWindow);
        return win;
    }
    function utils_classesToTokens(classes) {
        if (classes === void 0) classes = "";
        return classes.trim().split(" ").filter((c => !!c.trim()));
    }
    function deleteProps(obj) {
        const object = obj;
        Object.keys(object).forEach((key => {
            try {
                object[key] = null;
            } catch (e) {}
            try {
                delete object[key];
            } catch (e) {}
        }));
    }
    function utils_nextTick(callback, delay) {
        if (delay === void 0) delay = 0;
        return setTimeout(callback, delay);
    }
    function utils_now() {
        return Date.now();
    }
    function utils_getComputedStyle(el) {
        const window = ssr_window_esm_getWindow();
        let style;
        if (window.getComputedStyle) style = window.getComputedStyle(el, null);
        if (!style && el.currentStyle) style = el.currentStyle;
        if (!style) style = el.style;
        return style;
    }
    function utils_getTranslate(el, axis) {
        if (axis === void 0) axis = "x";
        const window = ssr_window_esm_getWindow();
        let matrix;
        let curTransform;
        let transformMatrix;
        const curStyle = utils_getComputedStyle(el);
        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
            transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
            matrix = transformMatrix.toString().split(",");
        }
        if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
        if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
        return curTransform || 0;
    }
    function utils_isObject(o) {
        return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
    }
    function isNode(node) {
        if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
        return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function utils_extend() {
        const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
        const noExtend = [ "__proto__", "constructor", "prototype" ];
        for (let i = 1; i < arguments.length; i += 1) {
            const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    const nextKey = keysArray[nextIndex];
                    const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
        return to;
    }
    function utils_setCSSProperty(el, varName, varValue) {
        el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll(_ref) {
        let {swiper, targetPosition, side} = _ref;
        const window = ssr_window_esm_getWindow();
        const startPosition = -swiper.translate;
        let startTime = null;
        let time;
        const duration = swiper.params.speed;
        swiper.wrapperEl.style.scrollSnapType = "none";
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        const dir = targetPosition > startPosition ? "next" : "prev";
        const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
        const animate = () => {
            time = (new Date).getTime();
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
            if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
            swiper.wrapperEl.scrollTo({
                [side]: currentPosition
            });
            if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = "hidden";
                swiper.wrapperEl.style.scrollSnapType = "";
                setTimeout((() => {
                    swiper.wrapperEl.style.overflow = "";
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                }));
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
            }
            swiper.cssModeFrameID = window.requestAnimationFrame(animate);
        };
        animate();
    }
    function utils_elementChildren(element, selector) {
        if (selector === void 0) selector = "";
        const window = ssr_window_esm_getWindow();
        const children = [ ...element.children ];
        if (window.HTMLSlotElement && element instanceof HTMLSlotElement) children.push(...element.assignedElements());
        if (!selector) return children;
        return children.filter((el => el.matches(selector)));
    }
    function elementIsChildOfSlot(el, slot) {
        const elementsQueue = [ slot ];
        while (elementsQueue.length > 0) {
            const elementToCheck = elementsQueue.shift();
            if (el === elementToCheck) return true;
            elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
        }
    }
    function elementIsChildOf(el, parent) {
        const window = ssr_window_esm_getWindow();
        let isChild = parent.contains(el);
        if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
            const children = [ ...parent.assignedElements() ];
            isChild = children.includes(el);
            if (!isChild) isChild = elementIsChildOfSlot(el, parent);
        }
        return isChild;
    }
    function showWarning(text) {
        try {
            console.warn(text);
            return;
        } catch (err) {}
    }
    function utils_createElement(tag, classes) {
        if (classes === void 0) classes = [];
        const el = document.createElement(tag);
        el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
        return el;
    }
    function elementPrevAll(el, selector) {
        const prevEls = [];
        while (el.previousElementSibling) {
            const prev = el.previousElementSibling;
            if (selector) {
                if (prev.matches(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
            el = prev;
        }
        return prevEls;
    }
    function elementNextAll(el, selector) {
        const nextEls = [];
        while (el.nextElementSibling) {
            const next = el.nextElementSibling;
            if (selector) {
                if (next.matches(selector)) nextEls.push(next);
            } else nextEls.push(next);
            el = next;
        }
        return nextEls;
    }
    function elementStyle(el, prop) {
        const window = ssr_window_esm_getWindow();
        return window.getComputedStyle(el, null).getPropertyValue(prop);
    }
    function utils_elementIndex(el) {
        let child = el;
        let i;
        if (child) {
            i = 0;
            while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
            return i;
        }
        return;
    }
    function utils_elementParents(el, selector) {
        const parents = [];
        let parent = el.parentElement;
        while (parent) {
            if (selector) {
                if (parent.matches(selector)) parents.push(parent);
            } else parents.push(parent);
            parent = parent.parentElement;
        }
        return parents;
    }
    function elementOuterSize(el, size, includeMargins) {
        const window = ssr_window_esm_getWindow();
        if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
        return el.offsetWidth;
    }
    function utils_makeElementsArray(el) {
        return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
    }
    let support;
    function calcSupport() {
        const window = ssr_window_esm_getWindow();
        const document = ssr_window_esm_getDocument();
        return {
            smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
            touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
        };
    }
    function getSupport() {
        if (!support) support = calcSupport();
        return support;
    }
    let deviceCached;
    function calcDevice(_temp) {
        let {userAgent} = _temp === void 0 ? {} : _temp;
        const support = getSupport();
        const window = ssr_window_esm_getWindow();
        const platform = window.navigator.platform;
        const ua = userAgent || window.navigator.userAgent;
        const device = {
            ios: false,
            android: false
        };
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        const windows = platform === "Win32";
        let macos = platform === "MacIntel";
        const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
        if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [ 0, 1, "13_0_0" ];
            macos = false;
        }
        if (android && !windows) {
            device.os = "android";
            device.android = true;
        }
        if (ipad || iphone || ipod) {
            device.os = "ios";
            device.ios = true;
        }
        return device;
    }
    function getDevice(overrides) {
        if (overrides === void 0) overrides = {};
        if (!deviceCached) deviceCached = calcDevice(overrides);
        return deviceCached;
    }
    let browser;
    function calcBrowser() {
        const window = ssr_window_esm_getWindow();
        const device = getDevice();
        let needPerspectiveFix = false;
        function isSafari() {
            const ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
        }
        if (isSafari()) {
            const ua = String(window.navigator.userAgent);
            if (ua.includes("Version/")) {
                const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                needPerspectiveFix = major < 16 || major === 16 && minor < 2;
            }
        }
        const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
        const isSafariBrowser = isSafari();
        const need3dFix = isSafariBrowser || isWebView && device.ios;
        return {
            isSafari: needPerspectiveFix || isSafariBrowser,
            needPerspectiveFix,
            need3dFix,
            isWebView
        };
    }
    function getBrowser() {
        if (!browser) browser = calcBrowser();
        return browser;
    }
    function Resize(_ref) {
        let {swiper, on, emit} = _ref;
        const window = ssr_window_esm_getWindow();
        let observer = null;
        let animationFrame = null;
        const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit("beforeResize");
            emit("resize");
        };
        const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            observer = new ResizeObserver((entries => {
                animationFrame = window.requestAnimationFrame((() => {
                    const {width, height} = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach((_ref2 => {
                        let {contentBoxSize, contentRect, target} = _ref2;
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    }));
                    if (newWidth !== width || newHeight !== height) resizeHandler();
                }));
            }));
            observer.observe(swiper.el);
        };
        const removeObserver = () => {
            if (animationFrame) window.cancelAnimationFrame(animationFrame);
            if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
            }
        };
        const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit("orientationchange");
        };
        on("init", (() => {
            if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                createObserver();
                return;
            }
            window.addEventListener("resize", resizeHandler);
            window.addEventListener("orientationchange", orientationChangeHandler);
        }));
        on("destroy", (() => {
            removeObserver();
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("orientationchange", orientationChangeHandler);
        }));
    }
    function Observer(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const observers = [];
        const window = ssr_window_esm_getWindow();
        const attach = function(target, options) {
            if (options === void 0) options = {};
            const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            const observer = new ObserverFunc((mutations => {
                if (swiper.__preventObserver__) return;
                if (mutations.length === 1) {
                    emit("observerUpdate", mutations[0]);
                    return;
                }
                const observerUpdate = function observerUpdate() {
                    emit("observerUpdate", mutations[0]);
                };
                if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
            }));
            observer.observe(target, {
                attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
                characterData: typeof options.characterData === "undefined" ? true : options.characterData
            });
            observers.push(observer);
        };
        const init = () => {
            if (!swiper.params.observer) return;
            if (swiper.params.observeParents) {
                const containerParents = utils_elementParents(swiper.hostEl);
                for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
            }
            attach(swiper.hostEl, {
                childList: swiper.params.observeSlideChildren
            });
            attach(swiper.wrapperEl, {
                attributes: false
            });
        };
        const destroy = () => {
            observers.forEach((observer => {
                observer.disconnect();
            }));
            observers.splice(0, observers.length);
        };
        extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        });
        on("init", init);
        on("destroy", destroy);
    }
    var eventsEmitter = {
        on(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            const method = priority ? "unshift" : "push";
            events.split(" ").forEach((event => {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            }));
            return self;
        },
        once(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            function onceHandler() {
                self.off(events, onceHandler);
                if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                handler.apply(self, args);
            }
            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny(handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            const method = priority ? "unshift" : "push";
            if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
            return self;
        },
        offAny(handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsAnyListeners) return self;
            const index = self.eventsAnyListeners.indexOf(handler);
            if (index >= 0) self.eventsAnyListeners.splice(index, 1);
            return self;
        },
        off(events, handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            events.split(" ").forEach((event => {
                if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                    if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                }));
            }));
            return self;
        },
        emit() {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            let events;
            let data;
            let context;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
            if (typeof args[0] === "string" || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            data.unshift(context);
            const eventsArray = Array.isArray(events) ? events : events.split(" ");
            eventsArray.forEach((event => {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                    eventHandler.apply(context, [ event, ...data ]);
                }));
                if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                    eventHandler.apply(context, data);
                }));
            }));
            return self;
        }
    };
    function updateSize() {
        const swiper = this;
        let width;
        let height;
        const el = swiper.el;
        if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
        if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
        width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
        height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
        });
    }
    function updateSlides() {
        const swiper = this;
        function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
        }
        const params = swiper.params;
        const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        let snapGrid = [];
        const slidesGrid = [];
        const slidesSizesGrid = [];
        let offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
        let offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
        const previousSnapGridLength = swiper.snapGrid.length;
        const previousSlidesGridLength = swiper.slidesGrid.length;
        let spaceBetween = params.spaceBetween;
        let slidePosition = -offsetBefore;
        let prevSlideSize = 0;
        let index = 0;
        if (typeof swiperSize === "undefined") return;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
        swiper.virtualSize = -spaceBetween;
        slides.forEach((slideEl => {
            if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
            slideEl.style.marginBottom = "";
            slideEl.style.marginTop = "";
        }));
        if (params.centeredSlides && params.cssMode) {
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
        }
        const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
        if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
        let slideSize;
        const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
        for (let i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            let slide;
            if (slides[i]) slide = slides[i];
            if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
            if (slides[i] && elementStyle(slide, "display") === "none") continue;
            if (params.slidesPerView === "auto") {
                if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                const slideStyles = getComputedStyle(slide);
                const currentTransform = slide.style.transform;
                const currentWebKitTransform = slide.style.webkitTransform;
                if (currentTransform) slide.style.transform = "none";
                if (currentWebKitTransform) slide.style.webkitTransform = "none";
                if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                    const width = getDirectionPropertyValue(slideStyles, "width");
                    const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                    const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                    const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                    const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                    const boxSizing = slideStyles.getPropertyValue("box-sizing");
                    if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                        const {clientWidth, offsetWidth} = slide;
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                    }
                }
                if (currentTransform) slide.style.transform = currentTransform;
                if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
            }
            if (slides[i]) slides[i].swiperSlideSize = slideSize;
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
        if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
        if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
        if (!params.centeredSlides) {
            const newSlidesGrid = [];
            for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
        }
        if (isVirtual && params.loop) {
            const size = slidesSizesGrid[0] + spaceBetween;
            if (params.slidesPerGroup > 1) {
                const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                const groupSize = size * params.slidesPerGroup;
                for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
            }
            for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                swiper.virtualSize += size;
            }
        }
        if (snapGrid.length === 0) snapGrid = [ 0 ];
        if (spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
            slides.filter(((_, slideIndex) => {
                if (!params.cssMode || params.loop) return true;
                if (slideIndex === slides.length - 1) return false;
                return true;
            })).forEach((slideEl => {
                slideEl.style[key] = `${spaceBetween}px`;
            }));
        }
        if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            }));
            allSlidesSize -= spaceBetween;
            const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
            snapGrid = snapGrid.map((snap => {
                if (snap <= 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            }));
        }
        if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            }));
            allSlidesSize -= spaceBetween;
            const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
            if (allSlidesSize + offsetSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                snapGrid.forEach(((snap, snapIndex) => {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                }));
                slidesGrid.forEach(((snap, snapIndex) => {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                }));
            }
        }
        Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
        });
        if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
            swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
        }
        if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit("snapGridLengthChange");
        }
        if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
        if (params.watchSlidesProgress) swiper.updateSlidesOffset();
        swiper.emit("slidesUpdated");
        if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
            const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
            const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
            if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
            } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
        }
    }
    function updateAutoHeight(speed) {
        const swiper = this;
        const activeSlides = [];
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let newHeight = 0;
        let i;
        if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
        const getSlideByIndex = index => {
            if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
            return swiper.slides[index];
        };
        if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
            activeSlides.push(slide);
        })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
        for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
            const height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
        }
        if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
    }
    function updateSlidesOffset() {
        const swiper = this;
        const slides = swiper.slides;
        const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
        for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
    const toggleSlideClasses$1 = (slideEl, condition, className) => {
        if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
    };
    function updateSlidesProgress(translate) {
        if (translate === void 0) translate = this && this.translate || 0;
        const swiper = this;
        const params = swiper.params;
        const {slides, rtlTranslate: rtl, snapGrid} = swiper;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
        let offsetCenter = -translate;
        if (rtl) offsetCenter = translate;
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        let spaceBetween = params.spaceBetween;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            let slideOffset = slide.swiperSlideOffset;
            if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
            }
            toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
            toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
            slide.progress = rtl ? -slideProgress : slideProgress;
            slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
        }
    }
    function updateProgress(translate) {
        const swiper = this;
        if (typeof translate === "undefined") {
            const multiplier = swiper.rtlTranslate ? -1 : 1;
            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }
        const params = swiper.params;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        let {progress, isBeginning, isEnd, progressLoop} = swiper;
        const wasBeginning = isBeginning;
        const wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
            const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
            isBeginning = isBeginningRounded || progress <= 0;
            isEnd = isEndRounded || progress >= 1;
            if (isBeginningRounded) progress = 0;
            if (isEndRounded) progress = 1;
        }
        if (params.loop) {
            const firstSlideIndex = swiper.getSlideIndexByData(0);
            const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
            const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
            const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
            const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
            const translateAbs = Math.abs(translate);
            if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
            if (progressLoop > 1) progressLoop -= 1;
        }
        Object.assign(swiper, {
            progress,
            progressLoop,
            isBeginning,
            isEnd
        });
        if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
        if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
        if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
        if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
        swiper.emit("progress", progress);
    }
    const toggleSlideClasses = (slideEl, condition, className) => {
        if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
    };
    function updateSlidesClasses() {
        const swiper = this;
        const {slides, params, slidesEl, activeIndex} = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
        let activeSlide;
        let prevSlide;
        let nextSlide;
        if (isVirtual) if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
            activeSlide = slides.find((slideEl => slideEl.column === activeIndex));
            nextSlide = slides.find((slideEl => slideEl.column === activeIndex + 1));
            prevSlide = slides.find((slideEl => slideEl.column === activeIndex - 1));
        } else activeSlide = slides[activeIndex];
        if (activeSlide) if (!gridEnabled) {
            nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) nextSlide = slides[0];
            prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
        }
        slides.forEach((slideEl => {
            toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
            toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
            toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
        }));
        swiper.emitSlidesClasses();
    }
    const processLazyPreloader = (swiper, imageEl) => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        const slideEl = imageEl.closest(slideSelector());
        if (slideEl) {
            let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                    if (lazyEl) lazyEl.remove();
                }
            }));
            if (lazyEl) lazyEl.remove();
        }
    };
    const unlazy = (swiper, index) => {
        if (!swiper.slides[index]) return;
        const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
        if (imageEl) imageEl.removeAttribute("loading");
    };
    const preload = swiper => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        let amount = swiper.params.lazyPreloadPrevNext;
        const len = swiper.slides.length;
        if (!len || !amount || amount < 0) return;
        amount = Math.min(amount, len);
        const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
        const activeIndex = swiper.activeIndex;
        if (swiper.params.grid && swiper.params.grid.rows > 1) {
            const activeColumn = activeIndex;
            const preloadColumns = [ activeColumn - amount ];
            preloadColumns.push(...Array.from({
                length: amount
            }).map(((_, i) => activeColumn + slidesPerView + i)));
            swiper.slides.forEach(((slideEl, i) => {
                if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
            }));
            return;
        }
        const slideIndexLastInView = activeIndex + slidesPerView - 1;
        if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
            const realIndex = (i % len + len) % len;
            if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
        } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
    };
    function getActiveIndexByTranslate(swiper) {
        const {slidesGrid, params} = swiper;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        let activeIndex;
        for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
        } else if (translate >= slidesGrid[i]) activeIndex = i;
        if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
        return activeIndex;
    }
    function updateActiveIndex(newActiveIndex) {
        const swiper = this;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
        let activeIndex = newActiveIndex;
        let snapIndex;
        const getVirtualRealIndex = aIndex => {
            let realIndex = aIndex - swiper.virtual.slidesBefore;
            if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
            if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
            return realIndex;
        };
        if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
        if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        if (activeIndex === previousIndex && !swiper.params.loop) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit("snapIndexChange");
            }
            return;
        }
        if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
            swiper.realIndex = getVirtualRealIndex(activeIndex);
            return;
        }
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        let realIndex;
        if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
            const firstSlideInColumn = swiper.slides.find((slideEl => slideEl.column === activeIndex));
            let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
            if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
            realIndex = Math.floor(activeSlideIndex / params.grid.rows);
        } else if (swiper.slides[activeIndex]) {
            const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
            if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
        } else realIndex = activeIndex;
        Object.assign(swiper, {
            previousSnapIndex,
            snapIndex,
            previousRealIndex,
            realIndex,
            previousIndex,
            activeIndex
        });
        if (swiper.initialized) preload(swiper);
        swiper.emit("activeIndexChange");
        swiper.emit("snapIndexChange");
        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            swiper.emit("slideChange");
        }
    }
    function updateClickedSlide(el, path) {
        const swiper = this;
        const params = swiper.params;
        let slide = el.closest(`.${params.slideClass}, swiper-slide`);
        if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
            if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
        }));
        let slideFound = false;
        let slideIndex;
        if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
        } else {
            swiper.clickedSlide = void 0;
            swiper.clickedIndex = void 0;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
    }
    var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
    };
    function getSwiperTranslate(axis) {
        if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
        const swiper = this;
        const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
        if (params.virtualTranslate) return rtl ? -translate : translate;
        if (params.cssMode) return translate;
        let currentTranslate = utils_getTranslate(wrapperEl, axis);
        currentTranslate += swiper.cssOverflowAdjustment();
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }
    function setTranslate(translate, byController) {
        const swiper = this;
        const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
        let x = 0;
        let y = 0;
        const z = 0;
        if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;
        if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
            if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
            wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        }
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        if (newProgress !== progress) swiper.updateProgress(translate);
        swiper.emit("setTranslate", swiper.translate, byController);
    }
    function minTranslate() {
        return -this.snapGrid[0];
    }
    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }
    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) translate = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (translateBounds === void 0) translateBounds = true;
        const swiper = this;
        const {params, wrapperEl} = swiper;
        if (swiper.animating && params.preventInteractionOnTransition) return false;
        const minTranslate = swiper.minTranslate();
        const maxTranslate = swiper.maxTranslate();
        let newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
        swiper.updateProgress(newTranslate);
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: -newTranslate,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: -newTranslate,
                    behavior: "smooth"
                });
            }
            return true;
        }
        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionEnd");
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionStart");
            }
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.onTranslateToWrapperTransitionEnd = null;
                    delete swiper.onTranslateToWrapperTransitionEnd;
                    swiper.animating = false;
                    if (runCallbacks) swiper.emit("transitionEnd");
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            }
        }
        return true;
    }
    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
    };
    function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
        }
        swiper.emit("setTransition", duration, byController);
    }
    function transitionEmit(_ref) {
        let {swiper, runCallbacks, direction, step} = _ref;
        const {activeIndex, previousIndex} = swiper;
        let dir = direction;
        if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
        swiper.emit(`transition${step}`);
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === "reset") {
                swiper.emit(`slideResetTransition${step}`);
                return;
            }
            swiper.emit(`slideChangeTransition${step}`);
            if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
        }
    }
    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {params} = swiper;
        if (params.cssMode) return;
        if (params.autoHeight) swiper.updateAutoHeight();
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "Start"
        });
    }
    function transitionEnd(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {params} = swiper;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "End"
        });
    }
    var transition = {
        setTransition,
        transitionStart,
        transitionEnd
    };
    function slideTo(index, speed, runCallbacks, internal, initial) {
        if (index === void 0) index = 0;
        if (runCallbacks === void 0) runCallbacks = true;
        if (typeof index === "string") index = parseInt(index, 10);
        const swiper = this;
        let slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
        if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        const translate = -snapGrid[snapIndex];
        if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
            const normalizedTranslate = -Math.floor(translate * 100);
            const normalizedGrid = Math.floor(slidesGrid[i] * 100);
            const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
            if (typeof slidesGrid[i + 1] !== "undefined") {
                if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
            } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
        }
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
        }
        if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
        swiper.updateProgress(translate);
        let direction;
        if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const isInitialVirtual = isVirtual && initial;
        if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            if (params.autoHeight) swiper.updateAutoHeight();
            swiper.updateSlidesClasses();
            if (params.effect !== "slide") swiper.setTranslate(translate);
            if (direction !== "reset") {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t = rtl ? translate : -translate;
            if (speed === 0) {
                if (isVirtual) {
                    swiper.wrapperEl.style.scrollSnapType = "none";
                    swiper._immediateVirtual = true;
                }
                if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                    swiper._cssModeVirtualInitialSet = true;
                    requestAnimationFrame((() => {
                        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    }));
                } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                if (isVirtual) requestAnimationFrame((() => {
                    swiper.wrapperEl.style.scrollSnapType = "";
                    swiper._immediateVirtual = false;
                }));
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: t,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: t,
                    behavior: "smooth"
                });
            }
            return true;
        }
        const browser = getBrowser();
        const isSafari = browser.isSafari;
        if (isVirtual && !initial && isSafari && swiper.isElement) swiper.virtual.update(false, false, slideIndex);
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
            };
            swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        }
        return true;
    }
    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (runCallbacks === void 0) runCallbacks = true;
        if (typeof index === "string") {
            const indexAsNumber = parseInt(index, 10);
            index = indexAsNumber;
        }
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
        let newIndex = index;
        if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                targetSlideIndex = swiper.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)).column;
            } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
            const {centeredSlides} = swiper.params;
            let slidesPerView = swiper.params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
            if (needLoopFix) {
                const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                swiper.loopFix({
                    direction,
                    slideTo: true,
                    activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                });
            }
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                newIndex = swiper.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)).column;
            } else newIndex = swiper.getSlideIndexByData(newIndex);
        }
        requestAnimationFrame((() => {
            swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }));
        return swiper;
    }
    function slideNext(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {enabled, params, animating} = swiper;
        if (!enabled || swiper.destroyed) return swiper;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        let perGroup = params.slidesPerGroup;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: "next"
            });
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
            if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                }));
                return true;
            }
        }
        if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    function slidePrev(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
        if (!enabled || swiper.destroyed) return swiper;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: "prev"
            });
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
        }
        const translate = rtlTranslate ? swiper.translate : -swiper.translate;
        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }
        const normalizedTranslate = normalize(translate);
        const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
        const isFreeMode = params.freeMode && params.freeMode.enabled;
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
            let prevSnapIndex;
            snapGrid.forEach(((snap, snapIndex) => {
                if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
            }));
            if (typeof prevSnapIndex !== "undefined") prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
        let prevIndex = 0;
        if (typeof prevSnap !== "undefined") {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                prevIndex = Math.max(prevIndex, 0);
            }
        }
        if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
        } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
            requestAnimationFrame((() => {
                swiper.slideTo(prevIndex, speed, runCallbacks, internal);
            }));
            return true;
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    function slideReset(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (runCallbacks === void 0) runCallbacks = true;
        if (threshold === void 0) threshold = .5;
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        let index = swiper.activeIndex;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        if (translate >= swiper.snapGrid[snapIndex]) {
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
        } else {
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
        }
        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }
    function slideToClickedSlide() {
        const swiper = this;
        if (swiper.destroyed) return;
        const {params, slidesEl} = swiper;
        const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        let slideToIndex = swiper.clickedIndex;
        let realIndex;
        const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
            if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                utils_nextTick((() => {
                    swiper.slideTo(slideToIndex);
                }));
            } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                utils_nextTick((() => {
                    swiper.slideTo(slideToIndex);
                }));
            } else swiper.slideTo(slideToIndex);
        } else swiper.slideTo(slideToIndex);
    }
    var slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
    };
    function loopCreate(slideRealIndex, initial) {
        const swiper = this;
        const {params, slidesEl} = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        const initSlides = () => {
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
        };
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
        const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
        const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
        const addBlankSlides = amountOfSlides => {
            for (let i = 0; i < amountOfSlides; i += 1) {
                const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                swiper.slidesEl.append(slideEl);
            }
        };
        if (shouldFillGroup) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            initSlides();
        } else if (shouldFillGrid) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            initSlides();
        } else initSlides();
        swiper.loopFix({
            slideRealIndex,
            direction: params.centeredSlides ? void 0 : "next",
            initial
        });
    }
    function loopFix(_temp) {
        let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, initial, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
        const swiper = this;
        if (!swiper.params.loop) return;
        swiper.emit("beforeLoopFix");
        const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
        const {centeredSlides, initialSlide} = params;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        if (swiper.virtual && params.virtual.enabled) {
            if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
            return;
        }
        let slidesPerView = params.slidesPerView;
        if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
            slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
            if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
        }
        const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
        let loopedSlides = slidesPerGroup;
        if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
        loopedSlides += params.loopAdditionalSlides;
        swiper.loopedSlides = loopedSlides;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
        const prependSlidesIndexes = [];
        const appendSlidesIndexes = [];
        const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
        const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
        let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
        if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.find((el => el.classList.contains(params.slideActiveClass)))); else activeIndex = activeSlideIndex;
        const isNext = direction === "next" || !direction;
        const isPrev = direction === "prev" || !direction;
        let slidesPrepended = 0;
        let slidesAppended = 0;
        const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
        const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
        if (activeColIndexWithShift < loopedSlides) {
            slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
            for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                const index = i - Math.floor(i / cols) * cols;
                if (gridEnabled) {
                    const colIndexToPrepend = cols - index - 1;
                    for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                } else prependSlidesIndexes.push(cols - index - 1);
            }
        } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
            slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
            if (isInitialOverflow) slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
            for (let i = 0; i < slidesAppended; i += 1) {
                const index = i - Math.floor(i / cols) * cols;
                if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                    if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                })); else appendSlidesIndexes.push(index);
            }
        }
        swiper.__preventObserver__ = true;
        requestAnimationFrame((() => {
            swiper.__preventObserver__ = false;
        }));
        if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
            if (appendSlidesIndexes.includes(activeSlideIndex)) appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
            if (prependSlidesIndexes.includes(activeSlideIndex)) prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
        }
        if (isPrev) prependSlidesIndexes.forEach((index => {
            slides[index].swiperLoopMoveDOM = true;
            slidesEl.prepend(slides[index]);
            slides[index].swiperLoopMoveDOM = false;
        }));
        if (isNext) appendSlidesIndexes.forEach((index => {
            slides[index].swiperLoopMoveDOM = true;
            slidesEl.append(slides[index]);
            slides[index].swiperLoopMoveDOM = false;
        }));
        swiper.recalcSlides();
        if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
            swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
        }));
        if (params.watchSlidesProgress) swiper.updateSlidesOffset();
        if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else if (setTranslate) {
                const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                swiper.touchEventsData.currentTranslate = swiper.translate;
            }
        } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
            const currentSlideTranslate = swiper.slidesGrid[activeIndex];
            const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
            const diff = newSlideTranslate - currentSlideTranslate;
            if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                if (setTranslate) {
                    swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                    swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                }
            }
        } else {
            const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.controller && swiper.controller.control && !byController) {
            const loopParams = {
                slideRealIndex,
                direction,
                setTranslate,
                activeSlideIndex,
                byController: true
            };
            if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                if (!c.destroyed && c.params.loop) c.loopFix({
                    ...loopParams,
                    slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                ...loopParams,
                slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
        }
        swiper.emit("loopFix");
    }
    function loopDestroy() {
        const swiper = this;
        const {params, slidesEl} = swiper;
        if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
        swiper.recalcSlides();
        const newSlidesOrder = [];
        swiper.slides.forEach((slideEl => {
            const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
            newSlidesOrder[index] = slideEl;
        }));
        swiper.slides.forEach((slideEl => {
            slideEl.removeAttribute("data-swiper-slide-index");
        }));
        newSlidesOrder.forEach((slideEl => {
            slidesEl.append(slideEl);
        }));
        swiper.recalcSlides();
        swiper.slideTo(swiper.realIndex, 0);
    }
    var loop = {
        loopCreate,
        loopFix,
        loopDestroy
    };
    function setGrabCursor(moving) {
        const swiper = this;
        if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
        if (swiper.isElement) swiper.__preventObserver__ = true;
        el.style.cursor = "move";
        el.style.cursor = moving ? "grabbing" : "grab";
        if (swiper.isElement) requestAnimationFrame((() => {
            swiper.__preventObserver__ = false;
        }));
    }
    function unsetGrabCursor() {
        const swiper = this;
        if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        if (swiper.isElement) swiper.__preventObserver__ = true;
        swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
        if (swiper.isElement) requestAnimationFrame((() => {
            swiper.__preventObserver__ = false;
        }));
    }
    var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
    };
    function closestElement(selector, base) {
        if (base === void 0) base = this;
        function __closestFrom(el) {
            if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
            if (el.assignedSlot) el = el.assignedSlot;
            const found = el.closest(selector);
            if (!found && !el.getRootNode) return null;
            return found || __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }
    function preventEdgeSwipe(swiper, event, startX) {
        const window = ssr_window_esm_getWindow();
        const {params} = swiper;
        const edgeSwipeDetection = params.edgeSwipeDetection;
        const edgeSwipeThreshold = params.edgeSwipeThreshold;
        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === "prevent") {
                event.preventDefault();
                return true;
            }
            return false;
        }
        return true;
    }
    function onTouchStart(event) {
        const swiper = this;
        const document = ssr_window_esm_getDocument();
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        const data = swiper.touchEventsData;
        if (e.type === "pointerdown") {
            if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
            data.pointerId = e.pointerId;
        } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
        if (e.type === "touchstart") {
            preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
            return;
        }
        const {params, touches, enabled} = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && e.pointerType === "mouse") return;
        if (swiper.animating && params.preventInteractionOnTransition) return;
        if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
        let targetEl = e.target;
        if (params.touchEventsTarget === "wrapper") if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
        if ("which" in e && e.which === 3) return;
        if ("button" in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return;
        const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
        const eventPath = e.composedPath ? e.composedPath() : e.path;
        if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
        const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
        const isTargetShadow = !!(e.target && e.target.shadowRoot);
        if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
        touches.currentX = e.pageX;
        touches.currentY = e.pageY;
        const startX = touches.currentX;
        const startY = touches.currentY;
        if (!preventEdgeSwipe(swiper, e, startX)) return;
        Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: void 0,
            startMoving: void 0
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = utils_now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = void 0;
        if (params.threshold > 0) data.allowThresholdMove = false;
        let preventDefault = true;
        if (targetEl.matches(data.focusableElements)) {
            preventDefault = false;
            if (targetEl.nodeName === "SELECT") data.isTouched = false;
        }
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
        swiper.emit("touchStart", e);
    }
    function onTouchMove(event) {
        const document = ssr_window_esm_getDocument();
        const swiper = this;
        const data = swiper.touchEventsData;
        const {params, touches, rtlTranslate: rtl, enabled} = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === "mouse") return;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        if (e.type === "pointermove") {
            if (data.touchId !== null) return;
            const id = e.pointerId;
            if (id !== data.pointerId) return;
        }
        let targetTouch;
        if (e.type === "touchmove") {
            targetTouch = [ ...e.changedTouches ].find((t => t.identifier === data.touchId));
            if (!targetTouch || targetTouch.identifier !== data.touchId) return;
        } else targetTouch = e;
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
            return;
        }
        const pageX = targetTouch.pageX;
        const pageY = targetTouch.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
            if (data.isTouched) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = utils_now();
            }
            return;
        }
        if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) return; else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) return;
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== "mouse") document.activeElement.blur();
        if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
        if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
        touches.previousX = touches.currentX;
        touches.previousY = touches.currentY;
        touches.currentX = pageX;
        touches.currentY = pageY;
        const diffX = touches.currentX - touches.startX;
        const diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
        if (typeof data.isScrolling === "undefined") {
            let touchAngle;
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
            }
        }
        if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
        if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
        if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) return;
        swiper.allowClick = false;
        if (!params.cssMode && e.cancelable) e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
        let diff = swiper.isHorizontal() ? diffX : diffY;
        let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
        if (params.oneWayMovement) {
            diff = Math.abs(diff) * (rtl ? 1 : -1);
            touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
        }
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
            touchesDiff = -touchesDiff;
        }
        const prevTouchesDirection = swiper.touchesDirection;
        swiper.swipeDirection = diff > 0 ? "prev" : "next";
        swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
        const isLoop = swiper.params.loop && !params.cssMode;
        const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
        if (!data.isMoved) {
            if (isLoop && allowLoopFix) swiper.loopFix({
                direction: swiper.swipeDirection
            });
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                const evt = new window.CustomEvent("transitionend", {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        bySwiperTouchMove: true
                    }
                });
                swiper.wrapperEl.dispatchEvent(evt);
            }
            data.allowMomentumBounce = false;
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
            swiper.emit("sliderFirstMove", e);
        }
        let loopFixed;
        (new Date).getTime();
        if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY,
                startTranslate: data.currentTranslate
            });
            data.loopSwapReset = true;
            data.startTranslate = data.currentTranslate;
            return;
        }
        swiper.emit("sliderMove", e);
        data.isMoved = true;
        data.currentTranslate = diff + data.startTranslate;
        let disableParentSwiper = true;
        let resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) resistanceRatio = 0;
        if (diff > 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
                direction: "prev",
                setTranslate: true,
                activeSlideIndex: 0
            });
            if (data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            }
        } else if (diff < 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
                direction: "next",
                setTranslate: true,
                activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
            });
            if (data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
        }
        if (disableParentSwiper) e.preventedByNestedSwiper = true;
        if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
        if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
        if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
        if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
        if (!params.followFinger || params.cssMode) return;
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
        swiper.updateProgress(data.currentTranslate);
        swiper.setTranslate(data.currentTranslate);
    }
    function onTouchEnd(event) {
        const swiper = this;
        const data = swiper.touchEventsData;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        let targetTouch;
        const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
        if (!isTouchEvent) {
            if (data.touchId !== null) return;
            if (e.pointerId !== data.pointerId) return;
            targetTouch = e;
        } else {
            targetTouch = [ ...e.changedTouches ].find((t => t.identifier === data.touchId));
            if (!targetTouch || targetTouch.identifier !== data.touchId) return;
        }
        if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
            const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
            if (!proceed) return;
        }
        data.pointerId = null;
        data.touchId = null;
        const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && e.pointerType === "mouse") return;
        if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
        const touchEndTime = utils_now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (swiper.allowClick) {
            const pathTree = e.path || e.composedPath && e.composedPath();
            swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
            swiper.emit("tap click", e);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
        }
        data.lastClickTime = utils_now();
        utils_nextTick((() => {
            if (!swiper.destroyed) swiper.allowClick = true;
        }));
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        let currentPos;
        if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
        if (params.cssMode) return;
        if (params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
                currentPos
            });
            return;
        }
        const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
        let stopIndex = 0;
        let groupSize = swiper.slidesSizesGrid[0];
        for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (typeof slidesGrid[i + increment] !== "undefined") {
                if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + increment] - slidesGrid[i];
                }
            } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        let rewindFirstIndex = null;
        let rewindLastIndex = null;
        if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (timeDiff > params.longSwipesMs) {
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
            if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
        } else {
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
            } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
        }
    }
    function onResize() {
        const swiper = this;
        const {params, el} = swiper;
        if (el && el.offsetWidth === 0) return;
        if (params.breakpoints) swiper.setBreakpoint();
        const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();
        const isVirtualLoop = isVirtual && params.loop;
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            clearTimeout(swiper.autoplay.resizeTimeout);
            swiper.autoplay.resizeTimeout = setTimeout((() => {
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
            }), 500);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
    }
    function onClick(e) {
        const swiper = this;
        if (!swiper.enabled) return;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }
    function onScroll() {
        const swiper = this;
        const {wrapperEl, rtlTranslate, enabled} = swiper;
        if (!enabled) return;
        swiper.previousTranslate = swiper.translate;
        if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
        if (swiper.translate === 0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        swiper.emit("setTranslate", swiper.translate, false);
    }
    function onLoad(e) {
        const swiper = this;
        processLazyPreloader(swiper, e.target);
        if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
        swiper.update();
    }
    function onDocumentTouchStart() {
        const swiper = this;
        if (swiper.documentTouchHandlerProceeded) return;
        swiper.documentTouchHandlerProceeded = true;
        if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
    }
    const events = (swiper, method) => {
        const document = ssr_window_esm_getDocument();
        const {params, el, wrapperEl, device} = swiper;
        const capture = !!params.nested;
        const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
        const swiperMethod = method;
        if (!el || typeof el === "string") return;
        document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
            passive: false,
            capture
        });
        el[domMethod]("touchstart", swiper.onTouchStart, {
            passive: false
        });
        el[domMethod]("pointerdown", swiper.onTouchStart, {
            passive: false
        });
        document[domMethod]("touchmove", swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]("pointermove", swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]("touchend", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointerup", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointercancel", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("touchcancel", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointerout", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointerleave", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("contextmenu", swiper.onTouchEnd, {
            passive: true
        });
        if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
        if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
        if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        el[domMethod]("load", swiper.onLoad, {
            capture: true
        });
    };
    function attachEvents() {
        const swiper = this;
        const {params} = swiper;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
        swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
        if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
        swiper.onClick = onClick.bind(swiper);
        swiper.onLoad = onLoad.bind(swiper);
        events(swiper, "on");
    }
    function detachEvents() {
        const swiper = this;
        events(swiper, "off");
    }
    var events$1 = {
        attachEvents,
        detachEvents
    };
    const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
    function setBreakpoint() {
        const swiper = this;
        const {realIndex, initialized, params, el} = swiper;
        const breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
        const document = ssr_window_esm_getDocument();
        const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
        const breakpointContainer = [ "window", "container" ].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
        const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
        if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
        const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
        const breakpointParams = breakpointOnlyParams || swiper.originalParams;
        const wasMultiRow = isGridEnabled(swiper, params);
        const isMultiRow = isGridEnabled(swiper, breakpointParams);
        const wasGrabCursor = swiper.params.grabCursor;
        const isGrabCursor = breakpointParams.grabCursor;
        const wasEnabled = params.enabled;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        }
        if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
        [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
            if (typeof breakpointParams[prop] === "undefined") return;
            const wasModuleEnabled = params[prop] && params[prop].enabled;
            const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
            if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
            if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
        }));
        const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        const wasLoop = params.loop;
        if (directionChanged && initialized) swiper.changeDirection();
        utils_extend(swiper.params, breakpointParams);
        const isEnabled = swiper.params.enabled;
        const hasLoop = swiper.params.loop;
        Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
        });
        if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
        swiper.currentBreakpoint = breakpoint;
        swiper.emit("_beforeBreakpoint", breakpointParams);
        if (initialized) if (needsReLoop) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (!wasLoop && hasLoop) {
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (wasLoop && !hasLoop) swiper.loopDestroy();
        swiper.emit("breakpoint", breakpointParams);
    }
    function getBreakpoint(breakpoints, base, containerEl) {
        if (base === void 0) base = "window";
        if (!breakpoints || base === "container" && !containerEl) return;
        let breakpoint = false;
        const window = ssr_window_esm_getWindow();
        const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
        const points = Object.keys(breakpoints).map((point => {
            if (typeof point === "string" && point.indexOf("@") === 0) {
                const minRatio = parseFloat(point.substr(1));
                const value = currentHeight * minRatio;
                return {
                    value,
                    point
                };
            }
            return {
                value: point,
                point
            };
        }));
        points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
        for (let i = 0; i < points.length; i += 1) {
            const {point, value} = points[i];
            if (base === "window") {
                if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
            } else if (value <= containerEl.clientWidth) breakpoint = point;
        }
        return breakpoint || "max";
    }
    var breakpoints = {
        setBreakpoint,
        getBreakpoint
    };
    function prepareClasses(entries, prefix) {
        const resultClasses = [];
        entries.forEach((item => {
            if (typeof item === "object") Object.keys(item).forEach((classNames => {
                if (item[classNames]) resultClasses.push(prefix + classNames);
            })); else if (typeof item === "string") resultClasses.push(prefix + item);
        }));
        return resultClasses;
    }
    function addClasses() {
        const swiper = this;
        const {classNames, params, rtl, el, device} = swiper;
        const suffixes = prepareClasses([ "initialized", params.direction, {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        }, {
            autoheight: params.autoHeight
        }, {
            rtl
        }, {
            grid: params.grid && params.grid.rows > 1
        }, {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        }, {
            android: device.android
        }, {
            ios: device.ios
        }, {
            "css-mode": params.cssMode
        }, {
            centered: params.cssMode && params.centeredSlides
        }, {
            "watch-progress": params.watchSlidesProgress
        } ], params.containerModifierClass);
        classNames.push(...suffixes);
        el.classList.add(...classNames);
        swiper.emitContainerClasses();
    }
    function swiper_core_removeClasses() {
        const swiper = this;
        const {el, classNames} = swiper;
        if (!el || typeof el === "string") return;
        el.classList.remove(...classNames);
        swiper.emitContainerClasses();
    }
    var classes = {
        addClasses,
        removeClasses: swiper_core_removeClasses
    };
    function checkOverflow() {
        const swiper = this;
        const {isLocked: wasLocked, params} = swiper;
        const {slidesOffsetBefore} = params;
        if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
        } else swiper.isLocked = swiper.snapGrid.length === 1;
        if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
        if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
        if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
        if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
    var checkOverflow$1 = {
        checkOverflow
    };
    var defaults = {
        init: true,
        direction: "horizontal",
        oneWayMovement: false,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        eventsPrefix: "swiper",
        enabled: true,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: false,
        userAgent: null,
        url: null,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: true,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 5,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: .85,
        watchSlidesProgress: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        loop: false,
        loopAddBlankSlides: true,
        loopAdditionalSlides: 0,
        loopPreventsSliding: true,
        rewind: false,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: true,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: true,
        _emitClasses: false
    };
    function moduleExtendParams(params, allModulesParams) {
        return function extendParams(obj) {
            if (obj === void 0) obj = {};
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
            if (typeof moduleParams !== "object" || moduleParams === null) {
                utils_extend(allModulesParams, obj);
                return;
            }
            if (params[moduleParamName] === true) params[moduleParamName] = {
                enabled: true
            };
            if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
            if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
            if (!(moduleParamName in params && "enabled" in moduleParams)) {
                utils_extend(allModulesParams, obj);
                return;
            }
            if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
            if (!params[moduleParamName]) params[moduleParamName] = {
                enabled: false
            };
            utils_extend(allModulesParams, obj);
        };
    }
    const prototypes = {
        eventsEmitter,
        update,
        translate,
        transition,
        slide,
        loop,
        grabCursor,
        events: events$1,
        breakpoints,
        checkOverflow: checkOverflow$1,
        classes
    };
    const extendedDefaults = {};
    class Swiper {
        constructor() {
            let el;
            let params;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
            if (!params) params = {};
            params = utils_extend({}, params);
            if (el && !params.el) params.el = el;
            const document = ssr_window_esm_getDocument();
            if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                const swipers = [];
                document.querySelectorAll(params.el).forEach((containerEl => {
                    const newParams = utils_extend({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                }));
                return swipers;
            }
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [ ...swiper.__modules__ ];
            if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
            const allModulesParams = {};
            swiper.modules.forEach((mod => {
                mod({
                    params,
                    swiper,
                    extendParams: moduleExtendParams(params, allModulesParams),
                    on: swiper.on.bind(swiper),
                    once: swiper.once.bind(swiper),
                    off: swiper.off.bind(swiper),
                    emit: swiper.emit.bind(swiper)
                });
            }));
            const swiperParams = utils_extend({}, defaults, allModulesParams);
            swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = utils_extend({}, swiper.params);
            swiper.passedParams = utils_extend({}, params);
            if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                swiper.on(eventName, swiper.params.on[eventName]);
            }));
            if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
            Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return swiper.params.direction === "horizontal";
                },
                isVertical() {
                    return swiper.params.direction === "vertical";
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: true,
                isEnd: false,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: swiper.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: true,
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            });
            swiper.emit("_swiper");
            if (swiper.params.init) swiper.init();
            return swiper;
        }
        getDirectionLabel(property) {
            if (this.isHorizontal()) return property;
            return {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[property];
        }
        getSlideIndex(slideEl) {
            const {slidesEl, params} = this;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            const firstSlideIndex = utils_elementIndex(slides[0]);
            return utils_elementIndex(slideEl) - firstSlideIndex;
        }
        getSlideIndexByData(index) {
            return this.getSlideIndex(this.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)));
        }
        recalcSlides() {
            const swiper = this;
            const {slidesEl, params} = swiper;
            swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        }
        enable() {
            const swiper = this;
            if (swiper.enabled) return;
            swiper.enabled = true;
            if (swiper.params.grabCursor) swiper.setGrabCursor();
            swiper.emit("enable");
        }
        disable() {
            const swiper = this;
            if (!swiper.enabled) return;
            swiper.enabled = false;
            if (swiper.params.grabCursor) swiper.unsetGrabCursor();
            swiper.emit("disable");
        }
        setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
            swiper.emit("_containerClasses", cls.join(" "));
        }
        getSlideClasses(slideEl) {
            const swiper = this;
            if (swiper.destroyed) return "";
            return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
        }
        emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const updates = [];
            swiper.slides.forEach((slideEl => {
                const classNames = swiper.getSlideClasses(slideEl);
                updates.push({
                    slideEl,
                    classNames
                });
                swiper.emit("_slideClass", slideEl, classNames);
            }));
            swiper.emit("_slideClasses", updates);
        }
        slidesPerViewDynamic(view, exact) {
            if (view === void 0) view = "current";
            if (exact === void 0) exact = false;
            const swiper = this;
            const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
            let spv = 1;
            if (typeof params.slidesPerView === "number") return params.slidesPerView;
            if (params.centeredSlides) {
                let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                let breakLoop;
                for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                    slideSize += Math.ceil(slides[i].swiperSlideSize);
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
                for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
            } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
            return spv;
        }
        update() {
            const swiper = this;
            if (!swiper || swiper.destroyed) return;
            const {snapGrid, params} = swiper;
            if (params.breakpoints) swiper.setBreakpoint();
            [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                if (imageEl.complete) processLazyPreloader(swiper, imageEl);
            }));
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            function setTranslate() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            let translated;
            if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                setTranslate();
                if (params.autoHeight) swiper.updateAutoHeight();
            } else {
                if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                    const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                    translated = swiper.slideTo(slides.length - 1, 0, false, true);
                } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                if (!translated) setTranslate();
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
            swiper.emit("update");
        }
        changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) needUpdate = true;
            const swiper = this;
            const currentDirection = swiper.params.direction;
            if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
            if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
            swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.forEach((slideEl => {
                if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
            }));
            swiper.emit("changeDirection");
            if (needUpdate) swiper.update();
            return swiper;
        }
        changeLanguageDirection(direction) {
            const swiper = this;
            if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
            swiper.rtl = direction === "rtl";
            swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
            if (swiper.rtl) {
                swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "rtl";
            } else {
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "ltr";
            }
            swiper.update();
        }
        mount(element) {
            const swiper = this;
            if (swiper.mounted) return true;
            let el = element || swiper.params.el;
            if (typeof el === "string") el = document.querySelector(el);
            if (!el) return false;
            el.swiper = swiper;
            if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
            const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
            const getWrapper = () => {
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                    const res = el.shadowRoot.querySelector(getWrapperSelector());
                    return res;
                }
                return utils_elementChildren(el, getWrapperSelector())[0];
            };
            let wrapperEl = getWrapper();
            if (!wrapperEl && swiper.params.createElements) {
                wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                el.append(wrapperEl);
                utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                    wrapperEl.append(slideEl);
                }));
            }
            Object.assign(swiper, {
                el,
                wrapperEl,
                slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                hostEl: swiper.isElement ? el.parentNode.host : el,
                mounted: true,
                rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
            });
            return true;
        }
        init(el) {
            const swiper = this;
            if (swiper.initialized) return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false) return swiper;
            swiper.emit("beforeInit");
            if (swiper.params.breakpoints) swiper.setBreakpoint();
            swiper.addClasses();
            swiper.updateSize();
            swiper.updateSlides();
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
            if (swiper.params.loop) swiper.loopCreate(void 0, true);
            swiper.attachEvents();
            const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
            if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
            lazyElements.forEach((imageEl => {
                if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                    processLazyPreloader(swiper, e.target);
                }));
            }));
            preload(swiper);
            swiper.initialized = true;
            preload(swiper);
            swiper.emit("init");
            swiper.emit("afterInit");
            return swiper;
        }
        destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) deleteInstance = true;
            if (cleanStyles === void 0) cleanStyles = true;
            const swiper = this;
            const {params, el, wrapperEl, slides} = swiper;
            if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
            swiper.emit("beforeDestroy");
            swiper.initialized = false;
            swiper.detachEvents();
            if (params.loop) swiper.loopDestroy();
            if (cleanStyles) {
                swiper.removeClasses();
                if (el && typeof el !== "string") el.removeAttribute("style");
                if (wrapperEl) wrapperEl.removeAttribute("style");
                if (slides && slides.length) slides.forEach((slideEl => {
                    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                    slideEl.removeAttribute("style");
                    slideEl.removeAttribute("data-swiper-slide-index");
                }));
            }
            swiper.emit("destroy");
            Object.keys(swiper.eventsListeners).forEach((eventName => {
                swiper.off(eventName);
            }));
            if (deleteInstance !== false) {
                if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
                deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        }
        static extendDefaults(newDefaults) {
            utils_extend(extendedDefaults, newDefaults);
        }
        static get extendedDefaults() {
            return extendedDefaults;
        }
        static get defaults() {
            return defaults;
        }
        static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
            const modules = Swiper.prototype.__modules__;
            if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
        }
        static use(module) {
            if (Array.isArray(module)) {
                module.forEach((m => Swiper.installModule(m)));
                return Swiper;
            }
            Swiper.installModule(module);
            return Swiper;
        }
    }
    Object.keys(prototypes).forEach((prototypeGroup => {
        Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }));
    }));
    Swiper.use([ Resize, Observer ]);
    function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
        if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
            if (!params[key] && params.auto === true) {
                let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                if (!element) {
                    element = utils_createElement("div", checkProps[key]);
                    element.className = checkProps[key];
                    swiper.el.append(element);
                }
                params[key] = element;
                originalParams[key] = element;
            }
        }));
        return params;
    }
    function Navigation(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        extendParams({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        });
        swiper.navigation = {
            nextEl: null,
            prevEl: null
        };
        function getEl(el) {
            let res;
            if (el && typeof el === "string" && swiper.isElement) {
                res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
                if (res) return res;
            }
            if (el) {
                if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
            }
            if (el && !res) return el;
            return res;
        }
        function toggleEl(el, disabled) {
            const params = swiper.params.navigation;
            el = utils_makeElementsArray(el);
            el.forEach((subEl => {
                if (subEl) {
                    subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                    if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }
            }));
        }
        function update() {
            const {nextEl, prevEl} = swiper.navigation;
            if (swiper.params.loop) {
                toggleEl(prevEl, false);
                toggleEl(nextEl, false);
                return;
            }
            toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
            toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
        }
        function onPrevClick(e) {
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slidePrev();
            emit("navigationPrev");
        }
        function onNextClick(e) {
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slideNext();
            emit("navigationNext");
        }
        function init() {
            const params = swiper.params.navigation;
            swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            });
            if (!(params.nextEl || params.prevEl)) return;
            let nextEl = getEl(params.nextEl);
            let prevEl = getEl(params.prevEl);
            Object.assign(swiper.navigation, {
                nextEl,
                prevEl
            });
            nextEl = utils_makeElementsArray(nextEl);
            prevEl = utils_makeElementsArray(prevEl);
            const initButton = (el, dir) => {
                if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
            };
            nextEl.forEach((el => initButton(el, "next")));
            prevEl.forEach((el => initButton(el, "prev")));
        }
        function destroy() {
            let {nextEl, prevEl} = swiper.navigation;
            nextEl = utils_makeElementsArray(nextEl);
            prevEl = utils_makeElementsArray(prevEl);
            const destroyButton = (el, dir) => {
                el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
            };
            nextEl.forEach((el => destroyButton(el, "next")));
            prevEl.forEach((el => destroyButton(el, "prev")));
        }
        on("init", (() => {
            if (swiper.params.navigation.enabled === false) disable(); else {
                init();
                update();
            }
        }));
        on("toEdge fromEdge lock unlock", (() => {
            update();
        }));
        on("destroy", (() => {
            destroy();
        }));
        on("enable disable", (() => {
            let {nextEl, prevEl} = swiper.navigation;
            nextEl = utils_makeElementsArray(nextEl);
            prevEl = utils_makeElementsArray(prevEl);
            if (swiper.enabled) {
                update();
                return;
            }
            [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
        }));
        on("click", ((_s, e) => {
            let {nextEl, prevEl} = swiper.navigation;
            nextEl = utils_makeElementsArray(nextEl);
            prevEl = utils_makeElementsArray(prevEl);
            const targetEl = e.target;
            let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
            if (swiper.isElement && !targetIsButton) {
                const path = e.path || e.composedPath && e.composedPath();
                if (path) targetIsButton = path.find((pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl)));
            }
            if (swiper.params.navigation.hideOnClick && !targetIsButton) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                let isHidden;
                if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
            }
        }));
        const enable = () => {
            swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
            init();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
            destroy();
        };
        Object.assign(swiper.navigation, {
            enable,
            disable,
            update,
            init,
            destroy
        });
    }
    function classes_to_selector_classesToSelector(classes) {
        if (classes === void 0) classes = "";
        return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function Pagination(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const pfx = "swiper-pagination";
        extendParams({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: "bullets",
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: number => number,
                formatFractionTotal: number => number,
                bulletClass: `${pfx}-bullet`,
                bulletActiveClass: `${pfx}-bullet-active`,
                modifierClass: `${pfx}-`,
                currentClass: `${pfx}-current`,
                totalClass: `${pfx}-total`,
                hiddenClass: `${pfx}-hidden`,
                progressbarFillClass: `${pfx}-progressbar-fill`,
                progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                clickableClass: `${pfx}-clickable`,
                lockClass: `${pfx}-lock`,
                horizontalClass: `${pfx}-horizontal`,
                verticalClass: `${pfx}-vertical`,
                paginationDisabledClass: `${pfx}-disabled`
            }
        });
        swiper.pagination = {
            el: null,
            bullets: []
        };
        let bulletSize;
        let dynamicBulletIndex = 0;
        function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
        }
        function setSideBullets(bulletEl, position) {
            const {bulletActiveClass} = swiper.params.pagination;
            if (!bulletEl) return;
            bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
            if (bulletEl) {
                bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
            }
        }
        function getMoveDirection(prevIndex, nextIndex, length) {
            prevIndex %= length;
            nextIndex %= length;
            if (nextIndex === prevIndex + 1) return "next"; else if (nextIndex === prevIndex - 1) return "previous";
            return;
        }
        function onBulletClick(e) {
            const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
            if (!bulletEl) return;
            e.preventDefault();
            const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
            if (swiper.params.loop) {
                if (swiper.realIndex === index) return;
                const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
                if (moveDirection === "next") swiper.slideNext(); else if (moveDirection === "previous") swiper.slidePrev(); else swiper.slideToLoop(index);
            } else swiper.slideTo(index);
        }
        function update() {
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            el = utils_makeElementsArray(el);
            let current;
            let previousIndex;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                previousIndex = swiper.previousRealIndex || 0;
                current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
            } else if (typeof swiper.snapIndex !== "undefined") {
                current = swiper.snapIndex;
                previousIndex = swiper.previousSnapIndex;
            } else {
                previousIndex = swiper.previousIndex || 0;
                current = swiper.activeIndex || 0;
            }
            if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                    bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                    el.forEach((subEl => {
                        subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                    }));
                    if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                        dynamicBulletIndex += current - (previousIndex || 0);
                        if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                    }
                    firstIndex = Math.max(current - dynamicBulletIndex, 0);
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.forEach((bulletEl => {
                    const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                    bulletEl.classList.remove(...classesToRemove);
                }));
                if (el.length > 1) bullets.forEach((bullet => {
                    const bulletIndex = utils_elementIndex(bullet);
                    if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                    if (params.dynamicBullets) {
                        if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                        if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                        if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                    }
                })); else {
                    const bullet = bullets[current];
                    if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                    if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                        bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                    }));
                    if (params.dynamicBullets) {
                        const firstDisplayedBullet = bullets[firstIndex];
                        const lastDisplayedBullet = bullets[lastIndex];
                        for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                        setSideBullets(firstDisplayedBullet, "prev");
                        setSideBullets(lastDisplayedBullet, "next");
                    }
                }
                if (params.dynamicBullets) {
                    const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                    const offsetProp = rtl ? "right" : "left";
                    bullets.forEach((bullet => {
                        bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                    }));
                }
            }
            el.forEach(((subEl, subElIndex) => {
                if (params.type === "fraction") {
                    subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                        fractionEl.textContent = params.formatFractionCurrent(current + 1);
                    }));
                    subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                        totalEl.textContent = params.formatFractionTotal(total);
                    }));
                }
                if (params.type === "progressbar") {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                    subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                        progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                        progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                    }));
                }
                if (params.type === "custom" && params.renderCustom) {
                    subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                    if (subElIndex === 0) emit("paginationRender", subEl);
                } else {
                    if (subElIndex === 0) emit("paginationRender", subEl);
                    emit("paginationUpdate", subEl);
                }
                if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
            }));
        }
        function render() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
            let el = swiper.pagination.el;
            el = utils_makeElementsArray(el);
            let paginationHTML = "";
            if (params.type === "bullets") {
                let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
            if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
            if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            swiper.pagination.bullets = [];
            el.forEach((subEl => {
                if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
            }));
            if (params.type !== "custom") emit("paginationRender", el[0]);
        }
        function init() {
            swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: "swiper-pagination"
            });
            const params = swiper.params.pagination;
            if (!params.el) return;
            let el;
            if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
            if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
            if (!el) el = params.el;
            if (!el || el.length === 0) return;
            if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                el = [ ...swiper.el.querySelectorAll(params.el) ];
                if (el.length > 1) el = el.find((subEl => {
                    if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                    return true;
                }));
            }
            if (Array.isArray(el) && el.length === 1) el = el[0];
            Object.assign(swiper.pagination, {
                el
            });
            el = utils_makeElementsArray(el);
            el.forEach((subEl => {
                if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                subEl.classList.add(params.modifierClass + params.type);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.type === "bullets" && params.dynamicBullets) {
                    subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                if (params.clickable) subEl.addEventListener("click", onBulletClick);
                if (!swiper.enabled) subEl.classList.add(params.lockClass);
            }));
        }
        function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.hiddenClass);
                    subEl.classList.remove(params.modifierClass + params.type);
                    subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.clickable) {
                        subEl.classList.remove(...(params.clickableClass || "").split(" "));
                        subEl.removeEventListener("click", onBulletClick);
                    }
                }));
            }
            if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
        }
        on("changeDirection", (() => {
            if (!swiper.pagination || !swiper.pagination.el) return;
            const params = swiper.params.pagination;
            let {el} = swiper.pagination;
            el = utils_makeElementsArray(el);
            el.forEach((subEl => {
                subEl.classList.remove(params.horizontalClass, params.verticalClass);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            }));
        }));
        on("init", (() => {
            if (swiper.params.pagination.enabled === false) disable(); else {
                init();
                render();
                update();
            }
        }));
        on("activeIndexChange", (() => {
            if (typeof swiper.snapIndex === "undefined") update();
        }));
        on("snapIndexChange", (() => {
            update();
        }));
        on("snapGridLengthChange", (() => {
            render();
            update();
        }));
        on("destroy", (() => {
            destroy();
        }));
        on("enable disable", (() => {
            let {el} = swiper.pagination;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
            }
        }));
        on("lock unlock", (() => {
            update();
        }));
        on("click", ((_s, e) => {
            const targetEl = e.target;
            const el = utils_makeElementsArray(swiper.pagination.el);
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
            }
        }));
        const enable = () => {
            swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
            let {el} = swiper.pagination;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
            }
            init();
            render();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
            let {el} = swiper.pagination;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
            }
            destroy();
        };
        Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update,
            init,
            destroy
        });
    }
    function Autoplay(_ref) {
        let {swiper, extendParams, on, emit, params} = _ref;
        swiper.autoplay = {
            running: false,
            paused: false,
            timeLeft: 0
        };
        extendParams({
            autoplay: {
                enabled: false,
                delay: 3e3,
                waitForTransition: true,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
            }
        });
        let timeout;
        let raf;
        let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
        let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
        let autoplayTimeLeft;
        let autoplayStartTime = (new Date).getTime();
        let wasPaused;
        let isTouched;
        let pausedByTouch;
        let touchStartTimeout;
        let slideChanged;
        let pausedByInteraction;
        let pausedByPointerEnter;
        function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
            if (e.target !== swiper.wrapperEl) return;
            swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
            if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) return;
            resume();
        }
        const calcTimeLeft = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                autoplayDelayCurrent = autoplayTimeLeft;
                wasPaused = false;
            }
            const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
            swiper.autoplay.timeLeft = timeLeft;
            emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
            raf = requestAnimationFrame((() => {
                calcTimeLeft();
            }));
        };
        const getSlideDelay = () => {
            let activeSlideEl;
            if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.find((slideEl => slideEl.classList.contains("swiper-slide-active"))); else activeSlideEl = swiper.slides[swiper.activeIndex];
            if (!activeSlideEl) return;
            const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
            return currentSlideDelay;
        };
        const run = delayForce => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            cancelAnimationFrame(raf);
            calcTimeLeft();
            let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
            autoplayDelayTotal = swiper.params.autoplay.delay;
            autoplayDelayCurrent = swiper.params.autoplay.delay;
            const currentSlideDelay = getSlideDelay();
            if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                delay = currentSlideDelay;
                autoplayDelayTotal = currentSlideDelay;
                autoplayDelayCurrent = currentSlideDelay;
            }
            autoplayTimeLeft = delay;
            const speed = swiper.params.speed;
            const proceed = () => {
                if (!swiper || swiper.destroyed) return;
                if (swiper.params.autoplay.reverseDirection) {
                    if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                        swiper.slidePrev(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                        emit("autoplay");
                    }
                } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                    swiper.slideNext(speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, speed, true, true);
                    emit("autoplay");
                }
                if (swiper.params.cssMode) {
                    autoplayStartTime = (new Date).getTime();
                    requestAnimationFrame((() => {
                        run();
                    }));
                }
            };
            if (delay > 0) {
                clearTimeout(timeout);
                timeout = setTimeout((() => {
                    proceed();
                }), delay);
            } else requestAnimationFrame((() => {
                proceed();
            }));
            return delay;
        };
        const start = () => {
            autoplayStartTime = (new Date).getTime();
            swiper.autoplay.running = true;
            run();
            emit("autoplayStart");
        };
        const stop = () => {
            swiper.autoplay.running = false;
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
            emit("autoplayStop");
        };
        const pause = (internal, reset) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            clearTimeout(timeout);
            if (!internal) pausedByInteraction = true;
            const proceed = () => {
                emit("autoplayPause");
                if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
            };
            swiper.autoplay.paused = true;
            if (reset) {
                if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                slideChanged = false;
                proceed();
                return;
            }
            const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
            autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
            if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
            proceed();
        };
        const resume = () => {
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
            autoplayStartTime = (new Date).getTime();
            if (pausedByInteraction) {
                pausedByInteraction = false;
                run(autoplayTimeLeft);
            } else run();
            swiper.autoplay.paused = false;
            emit("autoplayResume");
        };
        const onVisibilityChange = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            const document = ssr_window_esm_getDocument();
            if (document.visibilityState === "hidden") {
                pausedByInteraction = true;
                pause(true);
            }
            if (document.visibilityState === "visible") resume();
        };
        const onPointerEnter = e => {
            if (e.pointerType !== "mouse") return;
            pausedByInteraction = true;
            pausedByPointerEnter = true;
            if (swiper.animating || swiper.autoplay.paused) return;
            pause(true);
        };
        const onPointerLeave = e => {
            if (e.pointerType !== "mouse") return;
            pausedByPointerEnter = false;
            if (swiper.autoplay.paused) resume();
        };
        const attachMouseEvents = () => {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.el.addEventListener("pointerenter", onPointerEnter);
                swiper.el.addEventListener("pointerleave", onPointerLeave);
            }
        };
        const detachMouseEvents = () => {
            if (swiper.el && typeof swiper.el !== "string") {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            }
        };
        const attachDocumentEvents = () => {
            const document = ssr_window_esm_getDocument();
            document.addEventListener("visibilitychange", onVisibilityChange);
        };
        const detachDocumentEvents = () => {
            const document = ssr_window_esm_getDocument();
            document.removeEventListener("visibilitychange", onVisibilityChange);
        };
        on("init", (() => {
            if (swiper.params.autoplay.enabled) {
                attachMouseEvents();
                attachDocumentEvents();
                start();
            }
        }));
        on("destroy", (() => {
            detachMouseEvents();
            detachDocumentEvents();
            if (swiper.autoplay.running) stop();
        }));
        on("_freeModeStaticRelease", (() => {
            if (pausedByTouch || pausedByInteraction) resume();
        }));
        on("_freeModeNoMomentumRelease", (() => {
            if (!swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
        }));
        on("beforeTransitionStart", ((_s, speed, internal) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
        }));
        on("sliderFirstMove", (() => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.params.autoplay.disableOnInteraction) {
                stop();
                return;
            }
            isTouched = true;
            pausedByTouch = false;
            pausedByInteraction = false;
            touchStartTimeout = setTimeout((() => {
                pausedByInteraction = true;
                pausedByTouch = true;
                pause(true);
            }), 200);
        }));
        on("touchEnd", (() => {
            if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
            clearTimeout(touchStartTimeout);
            clearTimeout(timeout);
            if (swiper.params.autoplay.disableOnInteraction) {
                pausedByTouch = false;
                isTouched = false;
                return;
            }
            if (pausedByTouch && swiper.params.cssMode) resume();
            pausedByTouch = false;
            isTouched = false;
        }));
        on("slideChange", (() => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            slideChanged = true;
        }));
        Object.assign(swiper.autoplay, {
            start,
            stop,
            pause,
            resume
        });
    }
    //! Стилі Swiper
    const initSliders = () => {
        const heroSlider = document.querySelector("[data-hero-slider]");
        const arrivalsSlider = document.querySelector("[data-slider-arrivals]");
        if (heroSlider) {
            const speedSlider = 800;
            document.body.style.setProperty("--hero-slider-speed", `${speedSlider}ms`);
            new Swiper(heroSlider, {
                modules: [ Navigation, Pagination, Autoplay ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: false,
                speed: 800,
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: true
                },
                pagination: {
                    el: ".slider-hero__pagination",
                    clickable: true,
                    renderBullet: (index, className) => `<button class=${className} aria-label="Slide number ${index + 1}" type="button">${index <= 9 ? "0" + (index + 1) : index + 1}</button>`
                },
                navigation: {
                    prevEl: ".slider-hero__button-prev",
                    nextEl: ".slider-hero__button-next"
                },
                on: {}
            });
        }
        if (arrivalsSlider) {
            const speedSlider = 1e3;
            document.body.style.setProperty("--arrivals-slider-speed", `${speedSlider}ms`);
            new Swiper(arrivalsSlider, {
                modules: [ Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1.5,
                spaceBetween: 10,
                autoHeight: false,
                speed: speedSlider,
                pagination: {
                    el: ".slider-arrivals__pagination",
                    dynamicBullets: true,
                    clickable: true
                },
                breakpoints: {
                    480: {
                        slidesPerView: 2.5
                    },
                    768: {
                        slidesPerView: 3.5
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1496: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1920: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                },
                on: {}
            });
        }
    };
    const blockSliderInit = blockSlider => {
        if (blockSlider) {
            const mainSlider = blockSlider.querySelector(".block-slider__content.swiper");
            const prevSlideButton = blockSlider.querySelector(".block-slider__button-prev");
            const nextSlideButton = blockSlider.querySelector(".block-slider__button-next");
            if (mainSlider) {
                new Swiper(mainSlider, {
                    modules: [ Navigation ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    autoHeight: false,
                    speed: 800,
                    navigation: {
                        prevEl: prevSlideButton,
                        nextEl: nextSlideButton
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    },
                    on: {}
                });
                initProductSlider(blockSlider);
            }
        }
    };
    const initProductSlider = function() {
        let blockSlider = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const productSliders = blockSlider ? blockSlider.querySelectorAll(".content-product__images.swiper") : document.querySelectorAll(".content-product__images.swiper");
        if (productSliders.length > 0) productSliders.forEach((productSlider => {
            new Swiper(productSlider, {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: false,
                speed: 800,
                allowTouchMove: false,
                navigation: {
                    prevEl: ".images-content-product__button-prev",
                    nextEl: ".images-content-product__button-next"
                },
                on: {}
            });
        }));
    };
    window.addEventListener("load", (() => {
        initSliders();
    }));
    class DynamicAdapt {
        constructor(type) {
            this.type = type;
        }
        init() {
            this.objects = [];
            this.daClassname = "dynamic-adapt";
            this.nodes = [ ...document.querySelectorAll("[data-da]") ];
            this.nodes.forEach((node => {
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const object = {};
                object.element = node;
                object.parent = node.parentNode;
                object.destination = document.querySelector(`${dataArray[0].trim()}`);
                object.breakpoint = dataArray[1] ? dataArray[1].trim() : "767.98";
                object.place = dataArray[2] ? dataArray[2].trim() : "last";
                object.index = this.indexInParent(object.parent, object.element);
                this.objects.push(object);
            }));
            this.arraySort(this.objects);
            this.mediaQueries = this.objects.map((_ref => {
                let {breakpoint} = _ref;
                return `(${this.type}-width: ${breakpoint / 16}em),${breakpoint}`;
            })).filter(((item, index, self) => self.indexOf(item) === index));
            this.mediaQueries.forEach((media => {
                const mediaSplit = media.split(",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const objectsFilter = this.objects.filter((_ref2 => {
                    let {breakpoint} = _ref2;
                    return breakpoint === mediaBreakpoint;
                }));
                matchMedia.addEventListener("change", (() => {
                    this.mediaHandler(matchMedia, objectsFilter);
                }));
                this.mediaHandler(matchMedia, objectsFilter);
            }));
        }
        mediaHandler(matchMedia, objects) {
            if (matchMedia.matches) objects.forEach((object => {
                this.moveTo(object.place, object.element, object.destination);
            })); else objects.forEach((_ref3 => {
                let {parent, element, index} = _ref3;
                if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
            }));
        }
        moveTo(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.append(element);
                return;
            }
            if (place === "first") {
                destination.prepend(element);
                return;
            }
            destination.children[place].before(element);
        }
        moveBack(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
        }
        indexInParent(parent, element) {
            return [ ...parent.children ].indexOf(element);
        }
        arraySort(arr) {
            if (this.type === "min") arr.sort(((a, b) => {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return 0;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return 0;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        }
    }
    const da = new DynamicAdapt("max");
    da.init();
    class FormsValidation {
        constructor(options) {
            let defaultConfig = {
                viewpass: false,
                autoHeight: false,
                logging: true,
                errorMesseges: {
                    valueMissing: "Будь ласка, заповніть це поле.",
                    validateName: {
                        enterName: `Будь ласка, введіть Ваше ім’я.`,
                        containsNumbers: `Ім’я не може містити цифри.`,
                        containsOnlyAlphabet: `Ім’я може містити лише літери українського алфавіту та починатися з великої літери.`
                    },
                    validateEmail: {
                        enterEmail: `Будь ласка, введіть Ваш email`,
                        invalidEmail: {
                            incorrectEmail: `Ви ввели некоректну єлектронну адресу`,
                            missingAtSymbol: value => `Електронна адреса має містити символ "@". Єлектронна адреса "${value}" не містить символ "@"`
                        }
                    },
                    validatePhone: {
                        enterPhone: "Будь ласка, введіть Ваш номер телефону.",
                        invalidPhone: {
                            incorrectPhone: "Ви ввели некоректний номер."
                        }
                    },
                    validateSelect: `Будь ласка, виберіть варіант зі списку.`
                },
                reqexp: {
                    name: /^[А-ЩЬЮЯЄІЇҐ][а-щьюяєіїґ']{1,29}(-[А-ЩЬЮЯЄІЇҐ][а-щьюяєіїґ']{1,29})?$/,
                    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/,
                    phone: /^\+38\(\d{3}\)[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/
                },
                on: {
                    formSend: () => {}
                }
            };
            this.config = {
                ...defaultConfig,
                ...options,
                errorMesseges: {
                    ...defaultConfig.errorMesseges,
                    ...options?.errorMesseges
                },
                reqexp: {
                    ...defaultConfig.reqexp,
                    ...options?.reqexp
                },
                on: {
                    ...defaultConfig.on,
                    ...options?.on
                }
            };
            this.formAttributes = {
                required: "data-required",
                validate: "data-validate",
                noValidate: "data-no-validate",
                noFocusClasses: "data-no-focus-classes",
                modalMessage: "data-modal-message",
                gotoError: "data-goto-error",
                autoHeight: "data-autoheight",
                autoHeightMin: "data-autoheight-min",
                autoHeightMax: "data-autoheight-max",
                error: "data-error",
                ajax: "data-ajax",
                dev: "data-dev"
            };
            this.formClasses = {
                formFocus: "form-focus",
                formSuccess: "form-success",
                formError: "form-error",
                formSending: "form-sending",
                viewPass: "viewpass",
                viewPassActive: "viewpass-active"
            };
            this.eventsForm();
            if (this.config.autoHeight) this.autoHeight();
        }
        eventsForm() {
            document.addEventListener("focusin", (_ref => {
                let {target} = _ref;
                return this.focusIn(target);
            }));
            document.addEventListener("focusout", (_ref2 => {
                let {target} = _ref2;
                return this.focusOut(target);
            }));
            document.addEventListener("change", (_ref3 => {
                let {target} = _ref3;
                return this.inputChange(target);
            }));
            document.addEventListener("selectCallback", (_ref4 => {
                let {detail} = _ref4;
                return this.selectChange(detail);
            }));
            if (this.config.viewpass) document.addEventListener("click", (_ref5 => {
                let {target} = _ref5;
                return this.inputViewPass(target);
            }));
            document.addEventListener("submit", (e => this.formSubmit(e)));
        }
        formSubmit(e) {
            const formElement = e.target.closest("[data-form]");
            if (!formElement) return;
            this.formSubmitAction(formElement, e);
        }
        async formSubmitAction(form, e) {
            e.preventDefault();
            const error = !form.hasAttribute(this.formAttributes.noValidate) ? this.getErrorField(form) : 0;
            if (error !== 0) {
                if (form.querySelector(this.formClasses.formError) && form.hasAttribute(this.formAttributes.gotoError)) {
                    const formGoToErrorClass = form.dataset.gotoError || ".form-error";
                    gotoBlock(formGoToErrorClass, {
                        noHeader: true,
                        speed: 1e3
                    });
                }
                return;
            }
            const ajax = form.hasAttribute(this.formAttributes.ajax);
            const dev = form.hasAttribute(this.formAttributes.dev);
            try {
                if (ajax) {
                    const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                    const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                    const formData = new FormData(form);
                    form.classList.add(this.formClasses.formSending);
                    const response = await fetch(formAction, {
                        method: formMethod,
                        body: formMethod !== "GET" ? formData : null
                    });
                    if (!response.ok) {
                        const errorMassage = "Щось пішло не так!";
                        throw new Error(errorMassage);
                    }
                    const responseData = await response.json();
                    this.formSending(form, responseData);
                }
                if (dev) this.formSending(form);
            } catch (error) {
                this.#formLogging(error);
            } finally {
                form.classList.remove(this.formClasses.formSending);
            }
        }
        formSending(form) {
            arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
            document.dispatchEvent(new CustomEvent("formSent", {
                detail: {
                    form
                }
            }));
            setTimeout((() => {
                if (objectModules.modal) {
                    const {modalMessage} = form.dataset;
                    if (modalMessage) objectModules.modal.open(modalMessage);
                }
            }), 0);
            this.config.on.formSend(form);
            this.formClean(form);
            this.#formLogging(`Form send!`);
        }
        formClean(form) {
            form.reset();
            setTimeout((() => {
                const inputs = form.querySelectorAll("input,textarea");
                const checkboxes = form.querySelectorAll("input[type=checkbox]");
                const radioButtons = form.querySelectorAll("input[type=radio]");
                if (inputs.length > 0) inputs.forEach((input => {
                    this.removeFieldError(input);
                    this.removeFieldSuccess(input);
                }));
                if (checkboxes.length > 0) checkboxes.forEach((checkbox => checkbox.checked = false));
                if (radioButtons.length > 0) radioButtons.forEach((radio => radio.checked = false));
                if (objectModules.select) {
                    const selects = form.querySelectorAll("div.select");
                    if (selects.length > 0) selects.forEach((selectItem => {
                        const originalSelect = selectItem.querySelector("select");
                        const {options, multiple} = originalSelect;
                        this.removeSelectFieldError(selectItem, originalSelect);
                        this.removeSelectFieldSuccess(selectItem, originalSelect);
                        Array.from(options).forEach(((option, index) => {
                            if (!multiple) index === 0 ? option.setAttribute("selected", "") : option.removeAttribute("selected"); else option.removeAttribute("selected");
                        }));
                        objectModules.select.selectBuild(originalSelect);
                    }));
                }
            }), 0);
        }
        inputViewPass(target) {
            if (target.closest(`[class*="__${this.formClasses.viewPass}"]`)) {
                const viewPassButton = target.closest(`[class*="__${this.formClasses.viewPass}"]`);
                let inputType = viewPassButton.classList.contains(this.formClasses.viewPassActive) ? "password" : "text";
                viewPassButton.parentElement.querySelector("input").setAttribute("type", inputType);
                viewPassButton.classList.toggle(this.formClasses.viewPassActive);
            }
        }
        autoHeight() {
            const textareas = document.querySelectorAll(`textarea[${this.formAttributes.autoHeight}]`);
            if (textareas.length > 0) textareas.forEach((textarea => {
                const startHeight = textarea.hasAttribute(this.formAttributes.autoHeightMin) ? +textarea.dataset.autoheightMin : +textarea.offsetHeight;
                const maxHeight = textarea.hasAttribute(this.formAttributes.autoHeightMax) ? +textarea.dataset.autoheightMax : 1 / 0;
                this.#setTextareaHeight(textarea, Math.min(startHeight, maxHeight));
                textarea.addEventListener("input", (() => {
                    if (textarea.scrollHeight > startHeight) {
                        textarea.style.height = `auto`;
                        this.#setTextareaHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                    }
                }));
            }));
        }
        #setTextareaHeight(textarea, height) {
            textarea.style.height = `${height}px`;
        }
        inputChange(target) {
            const {type} = target;
            if (type === "checkbox" || type === "radio") this.validateField(target);
        }
        focusIn(target) {
            const {tagName} = target;
            if ((tagName === "INPUT" || tagName === "TEXTAREA") && target.closest("[data-form]")) {
                if (!target.hasAttribute(this.formAttributes.noFocusClasses)) {
                    target.classList.add(this.formClasses.formFocus);
                    target.parentElement.classList.add(this.formClasses.formFocus);
                }
                if (target.hasAttribute(this.formAttributes.validate)) this.removeFieldError(target);
            }
        }
        focusOut(target) {
            const {tagName} = target;
            if ((tagName === "INPUT" || tagName === "TEXTAREA") && target.closest("[data-form]")) {
                if (!target.hasAttribute(this.formAttributes.noFocusClasses)) {
                    target.classList.remove(this.formClasses.formFocus);
                    target.parentElement.classList.remove(this.formClasses.formFocus);
                }
                if (target.hasAttribute(this.formAttributes.validate)) this.validateField(target);
            }
        }
        selectChange(detail) {
            const {select} = detail;
            if (select) this.validateField(select);
        }
        getErrorField(form) {
            let error = 0;
            const formRequiredItems = form.querySelectorAll(`*[${this.formAttributes.required}]`);
            if (formRequiredItems.length > 0) formRequiredItems.forEach((formRequiredItem => {
                if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateField(formRequiredItem);
            }));
            return error;
        }
        validateField(formRequiredItem) {
            const {required} = formRequiredItem.dataset;
            const {type, tagName} = formRequiredItem;
            let error = 0;
            if (required === "name") {
                if (!formRequiredItem.value.trim()) {
                    this.removeFieldSuccess(formRequiredItem);
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.validateName.enterName);
                    error++;
                    return;
                }
                formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                if (this.#digitsTest(formRequiredItem)) {
                    this.removeFieldSuccess(formRequiredItem);
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.validateName.containsNumbers);
                    error++;
                    return;
                }
                if (this.#nameTest(formRequiredItem)) {
                    this.removeFieldSuccess(formRequiredItem);
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.validateName.containsOnlyAlphabet);
                    error++;
                } else {
                    this.removeFieldError(formRequiredItem);
                    this.addFieldSuccess(formRequiredItem);
                }
            }
            if (required === "email") {
                if (!formRequiredItem.value.trim()) {
                    this.removeFieldSuccess(formRequiredItem);
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.validateEmail.enterEmail);
                    error++;
                    return;
                }
                formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                if (this.#emailTest(formRequiredItem)) {
                    this.removeFieldSuccess(formRequiredItem);
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.validateEmail.invalidEmail.incorrectEmail);
                    if (!formRequiredItem.value.includes("@")) this.addFieldError(formRequiredItem, this.config.errorMesseges.validateEmail.invalidEmail.missingAtSymbol(formRequiredItem.value));
                    error++;
                } else {
                    this.removeFieldError(formRequiredItem);
                    this.addFieldSuccess(formRequiredItem);
                }
            }
            if (required === "phone") {
                if (!formRequiredItem.value.trim()) {
                    this.removeFieldSuccess(formRequiredItem);
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.validatePhone.enterPhone);
                    error++;
                    return;
                }
                formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                if (this.#phoneTest(formRequiredItem)) {
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.validatePhone.invalidPhone.incorrectPhone);
                    this.removeFieldSuccess(formRequiredItem);
                    error++;
                } else {
                    this.removeFieldError(formRequiredItem);
                    this.addFieldSuccess(formRequiredItem);
                }
            }
            if (type === "checkbox" && formRequiredItem.closest("[data-form]")) if (!formRequiredItem.checked && formRequiredItem.hasAttribute(this.formAttributes.required)) {
                this.addFieldError(formRequiredItem, this.config.errorMesseges.valueMissing);
                this.removeFieldSuccess(formRequiredItem);
                error++;
            } else {
                this.removeFieldError(formRequiredItem);
                this.addFieldSuccess(formRequiredItem);
            }
            if (type === "radio" && formRequiredItem.closest("[data-form]")) {
                const {name} = formRequiredItem;
                const radioGroup = document.querySelectorAll(`input[name="${name}"]`);
                const isChecked = Array.from(radioGroup).some((radio => radio.checked));
                const parentBlock = formRequiredItem.closest("fieldset") || formRequiredItem.parentElement;
                const formErrorItem = parentBlock.querySelector(".form__error");
                if (formErrorItem) parentBlock.removeChild(formErrorItem);
                if (!isChecked) {
                    if (!formErrorItem && parentBlock.hasAttribute(this.formAttributes.error)) {
                        const {error} = parentBlock.dataset;
                        parentBlock.insertAdjacentHTML("beforeend", this.getFormErrorHTML(error, this.config.errorMesseges.valueMissing));
                    }
                    radioGroup.forEach((radio => {
                        this.addFieldError(radio);
                        this.removeFieldSuccess(radio);
                    }));
                    if (!parentBlock.classList.contains(this.formClasses.formError)) parentBlock.classList.add(this.formClasses.formError);
                    error++;
                } else {
                    radioGroup.forEach((radio => {
                        this.removeFieldError(radio);
                        this.addFieldSuccess(radio);
                    }));
                    if (parentBlock.classList.contains(this.formClasses.formError)) parentBlock.classList.remove(this.formClasses.formError);
                }
            }
            if (objectModules.select && tagName === "SELECT" && formRequiredItem.closest("[data-form]")) {
                const selectItem = formRequiredItem.parentElement;
                if (formRequiredItem.multiple) {
                    const selectedOptions = Array.from(formRequiredItem.selectedOptions).filter((option => option.value));
                    if (!selectedOptions.length) {
                        this.removeSelectFieldSuccess(selectItem, formRequiredItem);
                        this.addSelectFieldError(selectItem, formRequiredItem, this.config.errorMesseges.validateSelect);
                        error++;
                    } else {
                        this.removeSelectFieldError(selectItem, formRequiredItem);
                        this.addSelectFieldSuccess(selectItem, formRequiredItem);
                    }
                } else if (!formRequiredItem.value.trim()) {
                    this.removeSelectFieldSuccess(selectItem, formRequiredItem);
                    this.addSelectFieldError(selectItem, formRequiredItem, this.config.errorMesseges.validateSelect);
                    error++;
                } else {
                    this.removeSelectFieldError(selectItem, formRequiredItem);
                    this.addSelectFieldSuccess(selectItem, formRequiredItem);
                }
            }
            if (tagName !== "SELECT" && type !== "checkbox" && type !== "radio" && required === "") if (!formRequiredItem.value.trim()) {
                this.removeFieldSuccess(formRequiredItem);
                this.addFieldError(formRequiredItem, this.config.errorMesseges.valueMissing);
                error++;
            } else {
                this.removeFieldError(formRequiredItem);
                this.addFieldSuccess(formRequiredItem);
            }
            return error;
        }
        addSelectFieldError(selectItem, originalSelect) {
            let errorMessage = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
            const parentSelectFormField = selectItem.parentElement;
            const formErrorItem = parentSelectFormField?.querySelector(".form__error");
            if (formErrorItem) parentSelectFormField.removeChild(formErrorItem);
            this.formFieldsToggleErrorClass(selectItem, parentSelectFormField, true);
            this.formFieldSetInvalidAttr(originalSelect);
            this.formFieldSetInvalidAttr(selectItem);
            if (originalSelect.hasAttribute(this.formAttributes.error)) {
                const {error} = originalSelect.dataset;
                parentSelectFormField.insertAdjacentHTML("beforeend", this.getFormErrorHTML(error, errorMessage));
            }
        }
        removeSelectFieldError(selectItem) {
            const parentSelectFormField = selectItem.parentElement;
            const formErrorItem = parentSelectFormField?.querySelector(".form__error");
            if (formErrorItem) parentSelectFormField.removeChild(formErrorItem);
            this.formFieldsToggleErrorClass(selectItem, parentSelectFormField);
        }
        addSelectFieldSuccess(selectItem, originalSelect) {
            const parentSelectFormField = selectItem.parentElement;
            this.formFieldsToggleSuccessClass(selectItem, parentSelectFormField, true);
            this.formFieldSetInvalidAttr(originalSelect, false);
            this.formFieldSetInvalidAttr(selectItem, false);
        }
        removeSelectFieldSuccess(selectItem) {
            const parentSelectFormField = selectItem.parentElement;
            this.formFieldsToggleSuccessClass(selectItem, parentSelectFormField);
        }
        addFieldError(formRequiredItem) {
            let errorMessage = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            const parentFormField = formRequiredItem.parentElement;
            const formErrorItem = parentFormField.querySelector(".form__error");
            if (formErrorItem) parentFormField.removeChild(formErrorItem);
            this.formFieldsToggleErrorClass(formRequiredItem, parentFormField, true);
            this.formFieldSetInvalidAttr(formRequiredItem);
            if (formRequiredItem.hasAttribute(this.formAttributes.error)) {
                const {error} = formRequiredItem.dataset;
                parentFormField.insertAdjacentHTML("beforeend", this.getFormErrorHTML(error, errorMessage));
            }
        }
        removeFieldError(formRequiredItem) {
            const parentFormField = formRequiredItem.parentElement;
            const formErrorItem = parentFormField.querySelector(".form__error");
            this.formFieldsToggleErrorClass(formRequiredItem, parentFormField);
            if (formErrorItem) parentFormField.removeChild(formErrorItem);
        }
        addFieldSuccess(formRequiredItem) {
            const parentFormField = formRequiredItem.parentElement;
            this.formFieldsToggleSuccessClass(formRequiredItem, parentFormField, true);
            this.formFieldSetInvalidAttr(formRequiredItem, false);
        }
        removeFieldSuccess(formRequiredItem) {
            const parentFormField = formRequiredItem.parentElement;
            this.formFieldsToggleSuccessClass(formRequiredItem, parentFormField);
        }
        formFieldSetInvalidAttr(formRequiredItem) {
            let isInvalid = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            formRequiredItem.setAttribute("aria-invalid", `${isInvalid ? true : false}`);
        }
        formFieldsToggleSuccessClass(formRequiredItem, parentFormField) {
            let isSuccess = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            if (!isSuccess) {
                formRequiredItem.classList.remove(this.formClasses.formSuccess);
                parentFormField.classList.remove(this.formClasses.formSuccess);
            } else {
                formRequiredItem.classList.add(this.formClasses.formSuccess);
                parentFormField.classList.add(this.formClasses.formSuccess);
            }
        }
        formFieldsToggleErrorClass(formRequiredItem, parentFormField) {
            let isError = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            if (!isError) {
                formRequiredItem.classList.remove(this.formClasses.formError);
                parentFormField.classList.remove(this.formClasses.formError);
            } else {
                formRequiredItem.classList.add(this.formClasses.formError);
                parentFormField.classList.add(this.formClasses.formError);
            }
        }
        getFormErrorHTML(error, errorMassage) {
            return `<div class="form__error">${error || errorMassage}</div>`;
        }
        #nameTest(formRequiredItem) {
            return !this.config.reqexp.name.test(formRequiredItem.value);
        }
        #emailTest(formRequiredItem) {
            return !this.config.reqexp.email.test(formRequiredItem.value);
        }
        #phoneTest(formRequiredItem) {
            return !this.config.reqexp.phone.test(formRequiredItem.value);
        }
        #digitsTest(formRequiredItem) {
            return /\d/.test(formRequiredItem.value);
        }
        #formLogging(message) {
            this.config.logging ? console.log(`[Форми]: ${message}`) : null;
        }
    }
    objectModules.formsValidation = new FormsValidation({
        viewpass: true
    });
    const accountPage = document.querySelector(".account");
    const getWishlistToLocalStorage = () => {
        const wishlistData = getItemFromLocalStorage("wishlist") || [];
        if (wishlistData.length > 0) return wishlistData;
        return [];
    };
    if (accountPage) {
        const wishListTabButtonCount = document.querySelector(".menu-account__title-count");
        const wishlistItems = getWishlistToLocalStorage();
        if (wishlistItems.length > 0) wishListTabButtonCount.textContent = wishlistItems.length; else wishListTabButtonCount.textContent = "0";
        document.addEventListener("click", accountActions);
        function accountActions(e) {
            const {target} = e;
            if (!target.closest(".body-account__button")) return;
            const deleteButton = target.closest(".body-account__button");
            const parentBlock = deleteButton.closest(".body-account");
            const wishlistBlock = parentBlock.querySelector(".body-account__wishlist");
            if (wishlistBlock) {
                const wishlistItems = wishlistBlock.children;
                if (wishlistItems.length === 0) return;
                const wishlisCount = document.querySelector(".main-header__button--wishlist span");
                Array.from(wishlistItems).forEach((item => item.remove()));
                removeItemFromLocalStorage("wishlist");
                wishListTabButtonCount.textContent = "0";
                if (wishlisCount) wishlisCount.textContent = "0";
                return;
            }
        }
    }
    const products = "data/products.json";
    const newArrivalsContainer = document.querySelector("[data-slider-arrivals] .slider-arrivals__wrapper");
    const catalogContainer = document.querySelector(".content-catalog .content-catalog__body");
    const blocksSlider = document.querySelectorAll("[data-block-slider]");
    const wishlistContainer = document.querySelector(".wishlist-account");
    const productsHTML = function(product) {
        let sliderBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        let dropdown = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        const {id, link, category, images, price, sale, discount, description, sizes, colors, rating} = product;
        const ratingHTML = () => {
            if (!rating) return "";
            return `\n          <div class="content-product__star-rating star-rating" data-rating="${rating}" role="img">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n        </div>\n     `;
        };
        const sizesHTML = () => {
            let seizesTemplateHTML = ``;
            if (sizes && sizes.length > 0) {
                seizesTemplateHTML += `<div class="product__sizes sizes-product">`;
                seizesTemplateHTML += sizes.map(((size, index) => `\n              <div class="sizes-product__item">\n                  <input class="sizes-product__input" type="radio" ${index === 0 ? "checked" : ""} name="size-${id}" id="size-${size}-${id}">\n                  <label class="sizes-product__label" for="size-${size}-${id}">${size}</label>\n              </div>\n          `)).join("");
                seizesTemplateHTML += `</div>`;
                return seizesTemplateHTML;
            } else return seizesTemplateHTML;
        };
        const colorsHTML = () => {
            let colorsTemplateHTML = ``;
            if (colors && colors.length > 0) {
                colorsTemplateHTML += `<div class="product__colors colors-product">`;
                colorsTemplateHTML += colors.map(((color, index) => `\n          <a class="colors-product__link ${index === 0 ? "colors-product__link--active" : ""}" href=${link}>\n           <div class="colors-product__color" data-color=${color} style="--color: ${color}"></div>\n          </a>\n        `)).join("");
                colorsTemplateHTML += `</div>`;
                return colorsTemplateHTML;
            } else return colorsTemplateHTML;
        };
        const imagesSliderHTML = () => images.map((image => `\n        <a class="content-product__image swiper-slide" href=${link}>\n          <img src="${image}" width="285" height="320" loading="lazy" alt="${description}">\n        </a>\n      `)).join("");
        const discountLabelHTML = () => {
            if (!sale) return "";
            return `\n        <div class="content-product__labels labels">\n        <span class="labels__item">${discount}%</span>\n        </div>\n      `;
        };
        const salePriceHTML = () => {
            if (sale) return `\n          <div class="product__price price" data-discount-price=${(price - price * discount / 100).toFixed(2)} data-price=${price.toFixed(2)}>\n          <div class="price__sale">\n            <span class="price__now">$${(price - price * discount / 100).toFixed(2)}</span>\n            <span class="price__old">$${price.toFixed(2)}</span>\n          </div>\n        </div>\n      `; else return `\n        <div class="product__price price" data-price=${price.toFixed(2)}>\n          <span>$${price.toFixed(2)}</span>\n        </div>\n      `;
        };
        const imageHTML = () => {
            if (!sliderBlock) return `\n          <a class="content-product__image" href=${link}>\n            <img src="${images[0]}" width="285" height="320" loading="lazy" alt="${description}">\n          </a>\n        `; else return `\n            <div class="content-product__images images-content-product swiper">\n              <div class="images-content-product__wrapper swiper-wrapper">\n                ${imagesSliderHTML()}\n              </div>\n              <button type="button" class="images-content-product__button-prev" aria-label="Previous slide">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#down-shevron"></use>\n                </svg>\n              </button>\n              <button type="button" class="images-content-product__button-next" aria-label="Next slide">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#down-shevron"></use>\n                </svg>\n              </button>\n          </div>\n      `;
        };
        const dropdownHTML = () => `\n            <div class="product__dropdown">\n               ${sizesHTML()}\n               ${colorsHTML()}\n            <button class="product__button button" aria-label="Add to cart" type="button">\n              <svg>\n                <use xlink:href="img/sprite/icons.svg#cart"></use>\n              </svg>\n              <span>Add to cart</span>\n            </button>\n          </div>\n    `;
        return `\n          <article data-product-id=${id} data-category=${category} class="${catalogContainer || wishlistContainer ? "" : "slider-arrivals__slide swiper-slide"} product">\n            <div class="product__content content-product">\n               ${imageHTML()}\n               ${ratingHTML()}\n              <button class="content-product__wishlist" aria-label="Add to wishlist">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#heard"></use>\n                </svg>\n              </button>\n              ${discountLabelHTML()}\n            </div>\n            <div class="product__info">\n              <h4 class="product__title">\n                <a class="product__title-link" href=${link}>${description}</a>\n              </h4>\n            ${salePriceHTML()}\n            </div>\n            ${sliderBlock || dropdown ? dropdownHTML() : ""}\n          </article>\n  `;
    };
    const renderProducts = async (products, target) => {
        if (target.classList.contains("slider-arrivals__wrapper") && target.classList.contains("watcher-view")) {
            const newProductsArray = products.filter((product => product.new === true));
            target.innerHTML = newProductsArray.map((product => productsHTML(product))).join("");
            starRating();
            return;
        }
        if (target.classList.contains("block-slider") && target.classList.contains("watcher-view")) {
            const blockSlider = target;
            const typeSlider = blockSlider.dataset.blockSlider;
            const blockSliderContent = blockSlider.querySelector(".block-slider__content");
            const blockSliderWrapper = blockSliderContent.querySelector(".block-slider__wrapper");
            if (typeSlider === "trending") {
                const trendingProductsArray = products.filter((product => product.trending === true));
                blockSliderWrapper.innerHTML = trendingProductsArray.map((product => productsHTML(product, true))).join("");
                blockSliderInit(blockSlider);
                starRating();
                return;
            }
            if (typeSlider === "sale") {
                const saleProductsArray = products.filter((product => product.sale === true));
                blockSliderWrapper.innerHTML = saleProductsArray.map((product => productsHTML(product, true))).join("");
                blockSliderInit(blockSlider);
                starRating();
                return;
            }
        }
        if (target.classList.contains("content-catalog__body") && target.classList.contains("watcher-view")) {
            const catalogProductsArray = products.slice(0, 12);
            target.innerHTML = catalogProductsArray.map((product => productsHTML(product, false, true))).join("");
            starRating();
            return;
        }
        if (target.classList.contains("wishlist-account") && target.classList.contains("watcher-view")) {
            const wishlistProductsArray = getWishlistToLocalStorage();
            if (!wishlistProductsArray.length) return;
            const wishlistProductsId = wishlistProductsArray.map((item => String(item.productId)));
            const productsInWishlist = products.filter((product => product.id && wishlistProductsId.includes(String(product.id))));
            target.innerHTML = productsInWishlist.map((product => productsHTML(product, true, true))).join("");
            initProductSlider();
            starRating();
            return;
        }
    };
    const getProducts = async e => {
        const {entry: {target, isIntersecting}} = e.detail;
        if (!isIntersecting) return;
        try {
            const response = await fetch(products);
            if (!response.ok) throw new Error("Response is not OK");
            const data = await response.json();
            renderProducts(data.products, target);
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
    };
    if (newArrivalsContainer || blocksSlider.length > 0 || catalogContainer || wishlistContainer) document.addEventListener("watcherCallback", getProducts);
    class Modal {
        #isOpen=false;
        #reopen=false;
        #bodyLock=false;
        #focusElements=[ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
        youTubeCode;
        hash=false;
        dataValue=false;
        selectorOpen=false;
        lastFocusElement=false;
        targetOpen={
            selector: false,
            element: false
        };
        previousOpen={
            selector: false,
            element: false
        };
        lastClosed={
            selector: false,
            element: false
        };
        constructor(options) {
            let defaultConfig = {
                logging: true,
                init: true,
                focusCatch: true,
                closeEsc: true,
                bodyLock: true,
                setAutoplayYoutube: true,
                hashSettings: {
                    location: true,
                    goHash: true
                },
                on: {
                    beforeOpen: () => {},
                    afterOpen: () => {},
                    beforeClose: () => {},
                    afterClose: () => {}
                }
            };
            this.modalClasses = {
                modal: "modal",
                modalWrapper: "modal__wrapper",
                modalContent: "modal__content",
                modalActive: "modal--show",
                bodyActive: "modal-show"
            };
            this.modalAttributes = {
                openButton: "data-modal",
                closeButton: "data-close",
                fixElementSelector: "[data-lp]",
                youtube: "data-modal-youtube",
                youtubePlace: "data-modal-youtube-place"
            };
            this.options = {
                ...defaultConfig,
                ...options,
                hashSettings: {
                    ...defaultConfig.hashSettings,
                    ...options?.hashSettings
                },
                on: {
                    ...defaultConfig.on,
                    ...options?.on
                }
            };
            this.options.init ? this.initModals() : null;
        }
        initModals() {
            this.#modalLogging(`Initializing a modal window`);
            this.eventsModal();
        }
        eventsModal() {
            document.addEventListener("click", (e => {
                const {target} = e;
                const buttonOpen = target.closest(`[${this.modalAttributes.openButton}]`);
                const buttonClose = target.closest(`[${this.modalAttributes.closeButton}]`);
                if (buttonOpen) {
                    e.preventDefault();
                    this.dataValue = buttonOpen.getAttribute(this.modalAttributes.openButton) || "error";
                    this.youTubeCode = buttonOpen.getAttribute(this.modalAttributes.youtube) || null;
                    if (this.dataValue === "error") {
                        this.#modalLogging(`The attribute is not filled ${buttonOpen.classList}`);
                        return;
                    }
                    if (!this.#isOpen) this.lastFocusElement = buttonOpen;
                    this.targetOpen.selector = `${this.dataValue}`;
                    this.selectorOpen = true;
                    this.open();
                    return;
                }
                if (buttonClose || !target.closest(`.${this.modalClasses.modalContent}`) && this.#isOpen) {
                    e.preventDefault();
                    this.close();
                    return;
                }
            }));
            document.addEventListener("keydown", (e => {
                if (this.options.closeEsc && e.key === "Escape" && this.#isOpen) {
                    e.preventDefault();
                    this.close();
                    return;
                }
                if (this.options.focusCatch && e.key === "Tab" && this.#isOpen) {
                    this.#focusCatch(e);
                    return;
                }
            }));
            if (this.options.hashSettings.goHash) {
                window.addEventListener("hashchange", (() => {
                    if (window.location.hash) this.#openToHash(); else this.close(this.targetOpen.selector);
                }));
                window.addEventListener("load", (() => {
                    if (window.location.hash) this.#openToHash();
                }));
            }
        }
        open(selectorValue) {
            if (bodyLockStatus) {
                this.#bodyLock = document.documentElement.classList.contains("lock") && !this.#isOpen ? true : false;
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                    this.targetOpen.selector = selectorValue;
                    this.selectorOpen = true;
                }
                if (this.#isOpen) {
                    this.#reopen = true;
                    this.close();
                }
                if (!this.selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                if (!this.targetOpen.element) {
                    this.#modalLogging(`Modal not found. Check the selector.`);
                    return;
                }
                if (this.youTubeCode) {
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute("allowfullscreen", "");
                    iframe.setAttribute("allow", `${this.options.setAutoplayYoutube ? "autoplay;" : ""} encrypted-media`);
                    iframe.setAttribute("src", `https://www.youtube.com/embed/${this.youTubeCode}?rel=0&showinfo=0&autoplay=1`);
                    const youtubePlace = this.targetOpen.element.querySelector(`[${this.modalAttributes.youtubePlace}]`);
                    youtubePlace?.appendChild(iframe);
                }
                if (this.options.hashSettings.location) {
                    this.#getHash();
                    this.#setHash();
                }
                this.options.on.beforeOpen(this);
                document.dispatchEvent(new CustomEvent("beforeModalOpen", {
                    detail: {
                        modal: this
                    }
                }));
                this.targetOpen.element.classList.add(this.modalClasses.modalActive);
                document.documentElement.classList.add(this.modalClasses.bodyActive);
                !this.#reopen ? !this.#bodyLock ? bodyLock() : null : this.#reopen = false;
                this.targetOpen.element.setAttribute("aria-hidden", "false");
                this.previousOpen = {
                    ...this.targetOpen
                };
                this.selectorOpen = false;
                this.#isOpen = true;
                setTimeout((() => this.#focusTrap()), 50);
                this.options.on.afterOpen(this);
                document.dispatchEvent(new CustomEvent("afterModalOpen", {
                    detail: {
                        modal: this
                    }
                }));
                this.#modalLogging(`Open modal window`);
            }
        }
        close(selectorValue) {
            if (!this.#isOpen || !bodyLockStatus) return;
            if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
            this.options.on.beforeClose(this);
            document.dispatchEvent(new CustomEvent("beforeModalClose", {
                detail: {
                    modal: this
                }
            }));
            if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.modalAttributes.youtubePlace}]`)) this.targetOpen.element.querySelector(`[${this.modalAttributes.youtubePlace}]`).innerHTML = "";
            this.previousOpen.element.classList.remove(this.modalClasses.modalActive);
            if (!this.#reopen) {
                document.documentElement.classList.remove(this.modalClasses.bodyActive);
                !this.#bodyLock ? bodyUnlock() : null;
                this.#isOpen = false;
            }
            setTimeout((() => {
                this.#focusTrap();
                this.previousOpen.element.setAttribute("aria-hidden", "true");
            }), 50);
            this.#removeHash();
            if (this.selectorOpen) {
                this.lastClosed.selector = this.previousOpen.selector;
                this.lastClosed.element = this.previousOpen.element;
            }
            this.options.on.afterClose(this);
            document.dispatchEvent(new CustomEvent("afterModalClose", {
                detail: {
                    modal: this
                }
            }));
            this.#modalLogging(`Close modal window`);
        }
        #getHash() {
            this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
        }
        #openToHash() {
            const classInHash = this.#getHashSelector();
            const button = document.querySelector(`[${this.modalAttributes.openButton} = "${classInHash}"]`) ? document.querySelector(`[${this.modalAttributes.openButton} = "${classInHash}"]`) : document.querySelector(`[${this.modalAttributes.openButton} = "${classInHash.replace(".", "#")}"]`);
            this.youTubeCode = button.getAttribute(this.modalAttributes.youtube) || null;
            if (button && classInHash) this.open(classInHash);
        }
        #getHashSelector() {
            if (document.querySelector(`.${window.location.hash.replace("#", "")}`)) return `.${window.location.hash.replace("#", "")}`; else if (document.querySelector(`${window.location.hash}`)) return `${window.location.hash}`;
        }
        #setHash() {
            history.pushState("", "", this.hash);
        }
        #removeHash() {
            history.pushState("", "", window.location.href.split("#")[0]);
        }
        #focusCatch(e) {
            const focusArray = [ ...this.targetOpen.element.querySelectorAll(this.#focusElements) ];
            const focusedIndex = focusArray.indexOf(document.activeElement);
            if (e.shiftKey && focusedIndex === 0) {
                focusArray[focusArray.length - 1].focus();
                e.preventDefault();
            }
            if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                focusArray[0].focus();
                e.preventDefault();
            }
        }
        #focusTrap() {
            const focusable = this.previousOpen.element.querySelectorAll(this.#focusElements);
            if (!this.lastFocusElement) this.lastFocusElement = document.querySelectorAll(this.#focusElements)[0];
            if (!this.#isOpen && this.lastFocusElement) this.lastFocusElement.focus(); else focusable[0].focus();
        }
        #modalLogging(message) {
            if (this.options.logging) FLS(`[Modal window]: ${message}`);
        }
    }
    objectModules.modal = new Modal({});
    class Select {
        #highlightedIndex=0;
        constructor(options) {
            let defaultConfig = {
                init: true,
                logging: true,
                speed: 150,
                placeholder: true,
                showSelected: true,
                searchSelected: false,
                removeItemButton: true,
                selectOptionText: "Press to select",
                noResultsText: "No results found"
            };
            this.config = {
                ...defaultConfig,
                ...options
            };
            this.selectAttributes = {
                open: "data-open",
                show: "data-show",
                oneSelect: "data-one-select",
                checkbox: "data-checkbox",
                submit: "data-submit",
                scroll: "data-scroll",
                hrefBlank: "data-href-blank",
                tags: "data-tags"
            };
            this.selectClasses = {
                select: "select",
                selectBody: "select__body",
                selectTitle: "select__title",
                selectPlaceholder: "select__placeholder",
                selectInput: "select__input",
                selectLink: "select__link",
                selectOptions: "select__options",
                selectDropdown: "select__dropdown",
                selectOption: "select__option",
                selectNotice: "select__notice",
                selectRow: "select__row",
                selectData: "select__asset",
                selectText: "select__text",
                selectButton: "select__button",
                selectDisabled: "select-disabled",
                selectTag: "select-tag",
                selectOpen: "select-open",
                selectActive: "select-active",
                selectFocus: "select-focus",
                selectSingle: "select-single",
                selectMultiple: "select-multiple",
                selectCheckBox: "select-checkbox",
                selectOptionSelected: "select-selected",
                selectHighlighted: "select-highlighted"
            };
            if (this.config.init) {
                const selectItems = document.querySelectorAll("select");
                if (!selectItems.length) {
                    this.#setLogging("There is no select");
                    return;
                }
                this.selectsInit(selectItems);
                this.selectEvents();
                this.#setLogging(`I made selects: (${selectItems.length})`);
            }
        }
        selectsInit(selectItems) {
            selectItems.forEach(((originalSelect, index) => {
                this.selectInit(originalSelect, index + 1);
            }));
        }
        selectEvents() {
            document.addEventListener("click", (e => this.selectsActions(e)));
            document.addEventListener("pointerover", (e => this.selectsActions(e)));
            document.addEventListener("keydown", (e => this.selectsActions(e)));
            document.addEventListener("focusin", (e => this.selectsActions(e)));
            document.addEventListener("focusout", (e => this.selectsActions(e)));
        }
        selectInit(originalSelect, index) {
            const {multiple, options, id, dataset} = originalSelect;
            const selectContainer = document.createElement("div");
            const selectedOption = Array.from(options).some((option => option.selected));
            const selectPlaceholder = Array.from(options).find((option => !option.value));
            const emptyOptionValue = !selectedOption && multiple ? selectPlaceholder : null;
            const selectLabel = this.getSelectLabel(id);
            this.resetHighLightedIndex(multiple, selectPlaceholder);
            selectContainer.classList.add(this.selectClasses.select);
            originalSelect.parentNode.insertBefore(selectContainer, originalSelect);
            selectContainer.appendChild(originalSelect);
            this.selectContainerAddAttr(selectContainer, selectLabel, multiple);
            if (emptyOptionValue) {
                Array.from(options).forEach((option => option.removeAttribute("selected")));
                emptyOptionValue.setAttribute("selected", "");
            }
            originalSelect.hidden = true;
            originalSelect.setAttribute("tabindex", "-1");
            originalSelect.dataset.speed = dataset.speed || this.config.speed;
            if (index) dataset.id = index;
            this.config.speed = +dataset.speed;
            selectContainer.insertAdjacentHTML("beforeend", this.getSelectBodyHTML());
            if (selectPlaceholder) this.selectPlaceholder(originalSelect, selectPlaceholder);
            this.selectBuild(originalSelect);
            originalSelect.addEventListener("change", (e => this.selectChange(e)));
        }
        selectPlaceholder(originalSelect, selectPlaceholder) {
            const {value} = this.getSelectPlaceholder(selectPlaceholder);
            originalSelect.dataset.placeholder = value;
        }
        selectContainerAddAttr(selectContainer, selectLabel) {
            let multiple = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            selectContainer.setAttribute("tabindex", "0");
            if (selectLabel && !multiple) selectContainer.setAttribute("aria-label", selectLabel.textContent);
            if (multiple) selectContainer.setAttribute("aria-autocomplete", "list");
            selectContainer.setAttribute("aria-haspopup", true);
            selectContainer.setAttribute("role", `${multiple ? "combobox" : "listbox"}`);
            selectContainer.setAttribute("aria-expanded", false);
        }
        selectBuild(originalSelect) {
            const {multiple, dataset} = originalSelect;
            const selectItem = originalSelect.parentElement;
            selectItem.dataset.id = originalSelect.dataset.id;
            if (dataset.classModif) selectItem.classList.add(`select--${dataset.classModif}`);
            if (multiple) {
                selectItem.classList.add(this.selectClasses.selectMultiple);
                selectItem.classList.remove(this.selectClasses.selectSingle);
            } else {
                selectItem.classList.add(this.selectClasses.selectSingle);
                selectItem.classList.remove(this.selectClasses.selectMultiple);
            }
            originalSelect.hasAttribute(this.selectAttributes.checkbox) && multiple ? selectItem.classList.add(this.selectClasses.selectCheckBox) : selectItem.classList.remove(this.selectClasses.selectCheckBox);
            this.setSelectTitleValue(selectItem, originalSelect);
            this.setOptions(selectItem, originalSelect);
            if (multiple) this.searchActions(selectItem);
            if (originalSelect.hasAttribute(this.selectAttributes.open)) this.selectAction(selectItem);
            this.selectDisabled(selectItem, originalSelect);
        }
        selectsActions(e) {
            const {target, type, code, pointerType} = e;
            const select = target.closest(this.getSelectClass(this.selectClasses.select));
            const selectTag = target.closest(this.getSelectClass(this.selectClasses.selectTag));
            const selectButton = target.closest(this.getSelectClass(this.selectClasses.selectButton));
            const selectTitle = target.closest(this.getSelectClass(this.selectClasses.selectTitle));
            const selectOption = target.closest(this.getSelectClass(this.selectClasses.selectOption));
            const selectInput = target.closest(this.getSelectClass(this.selectClasses.selectInput));
            if (!select && !selectTag) {
                if (type === "pointerover") return;
                this.closeSelects();
                return;
            }
            const selectItem = select || document.querySelector(`${this.getSelectClass(this.selectClasses.select)}[data-id="${selectTag.dataset.selectId}"]`);
            const {originalSelect} = this.getSelectElement(selectItem);
            const {multiple, options, disabled} = originalSelect;
            const selectPlaceholder = Array.from(options).find((option => !option.value));
            this.removeSelectItemActiveDescendant(selectItem);
            if (type === "pointerover" && pointerType === "mouse") if (selectOption) {
                this.removeOptionHighlightedClass(selectItem);
                selectOption.classList.add(this.selectClasses.selectHighlighted);
                this.#highlightedIndex = this.getVisibleSelectOptionsItems(selectItem).findIndex((option => option === selectOption));
                this.setSelectItemActiveDescendant(selectItem, selectOption);
            }
            if (type === "click" && !disabled) {
                this.removeOptionHighlightedClass(selectItem);
                if (!multiple) this.resetHighLightedIndex(multiple, selectPlaceholder);
                if (selectTag || selectButton) {
                    const {selectId, value} = selectTag?.dataset || selectButton?.dataset;
                    const optionItem = document.querySelector(`.${this.selectClasses.select}[data-id="${selectId}"] .select__option[data-value="${value}"]`);
                    this.optionAction(selectItem, originalSelect, optionItem);
                } else if (selectTitle || selectInput) this.selectAction(selectItem); else if (selectOption) this.optionAction(selectItem, originalSelect, selectOption);
            }
            if (type === "focusin" || type === "focusout") {
                if (select) type === "focusin" ? selectItem.classList.add(this.selectClasses.selectFocus) : selectItem.classList.remove(this.selectClasses.selectFocus);
                return;
            }
            if (type === "keydown" && !disabled) {
                if (code === "Escape") {
                    this.closeSelects();
                    return;
                }
                if (code === "Tab" && selectItem.classList.contains(this.selectClasses.selectOpen)) {
                    this.closeSelects();
                    return;
                }
                const selectVisibleOptionsItems = this.getVisibleSelectOptionsItems(selectItem);
                if (selectVisibleOptionsItems.length === 0) return;
                if (code === "ArrowDown" || code === "ArrowUp") {
                    e.preventDefault();
                    const highlightOption = (selectOptionsItems, highlightedIndex) => {
                        selectOptionsItems.forEach(((selectOptionsItem, index) => {
                            selectOptionsItem.classList.toggle(this.selectClasses.selectHighlighted, highlightedIndex === index);
                        }));
                    };
                    if (code === "ArrowDown") this.#highlightedIndex = (this.#highlightedIndex + 1) % selectVisibleOptionsItems.length; else if (code === "ArrowUp") this.#highlightedIndex = (this.#highlightedIndex - 1 + selectVisibleOptionsItems.length) % selectVisibleOptionsItems.length;
                    highlightOption(selectVisibleOptionsItems, this.#highlightedIndex);
                    this.setSelectItemActiveDescendant(selectItem, selectVisibleOptionsItems[this.#highlightedIndex]);
                }
                if (code === "Backspace") {
                    e.preventDefault();
                    if (this.#highlightedIndex !== -1) {
                        const highlightedOption = selectVisibleOptionsItems[this.#highlightedIndex];
                        if (highlightedOption && highlightedOption.classList.contains(this.selectClasses.selectOptionSelected)) {
                            this.optionAction(selectItem, originalSelect, highlightedOption);
                            return;
                        }
                    }
                }
                if (code === "Enter") {
                    e.preventDefault();
                    const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
                    if (selectButton) {
                        const {selectId, value} = selectButton.dataset;
                        const optionItem = document.querySelector(`.${this.selectClasses.select}[data-id="${selectId}"] .select__option[data-value="${value}"]`);
                        this.optionAction(selectItem, originalSelect, optionItem);
                        this.selectAction(selectItem);
                        return;
                    }
                    if (!selectItem.classList.contains(this.selectClasses.selectOpen)) {
                        this.selectAction(selectItem);
                        if (selectInput) selectInput.focus();
                        return;
                    }
                    if (this.#highlightedIndex !== -1) {
                        this.optionAction(selectItem, originalSelect, selectVisibleOptionsItems[this.#highlightedIndex]);
                        const selectedOptionItem = selectVisibleOptionsItems[this.#highlightedIndex];
                        if (!multiple && selectedOptionItem) {
                            selectedOptionItem.classList.remove(this.selectClasses.selectHighlighted);
                            if (this.config.showSelected) if (selectedOptionItem.classList.contains(this.selectClasses.selectPlaceholder)) this.#highlightedIndex = 0; else this.#highlightedIndex = this.#highlightedIndex;
                        } else {
                            this.removeOptionHighlightedClass(selectItem);
                            this.#highlightedIndex = this.#highlightedIndex;
                        }
                    }
                }
            }
        }
        selectAction(selectItem) {
            const {originalSelect} = this.getSelectElement(selectItem);
            const {speed, zIndex} = originalSelect.dataset;
            const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            const selectOpenzIndex = zIndex || 3;
            this.setOptionsPosition(selectItem);
            if (originalSelect.closest(`[${this.selectAttributes.oneSelect}]`)) {
                const selectOneGroup = originalSelect.closest(`[${this.selectAttributes.oneSelect}]`);
                this.closeSelects(selectOneGroup);
            }
            if (!selectOptions.classList.contains("slide")) {
                selectItem.classList.toggle(this.selectClasses.selectOpen);
                _slideToggle(selectOptions, speed);
                if (selectItem.classList.contains(this.selectClasses.selectOpen)) {
                    this.updateAriaExpandedAttr(selectItem, selectOptions, true);
                    selectItem.style.zIndex = selectOpenzIndex;
                } else {
                    this.updateAriaExpandedAttr(selectItem, selectOptions);
                    setTimeout((() => {
                        selectItem.style.zIndex = "";
                    }), speed);
                }
            }
        }
        optionAction(selectItem, originalSelect, optionItem) {
            if (!optionItem) return;
            const {multiple} = originalSelect;
            const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            const selectOptionItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
            if (!selectOptions.classList.contains("slide")) {
                if (multiple) optionItem.classList.toggle(this.selectClasses.selectOptionSelected); else {
                    selectOptionItems.forEach((selectOptionItem => {
                        selectOptionItem.setAttribute("aria-selected", false);
                        selectOptionItem.classList.remove(this.selectClasses.selectOptionSelected);
                    }));
                    optionItem.classList.add(this.selectClasses.selectOptionSelected);
                }
                optionItem.classList.contains(this.selectClasses.selectOptionSelected) ? optionItem.setAttribute("aria-selected", true) : optionItem.setAttribute("aria-selected", false);
                if (!multiple) {
                    if (!this.config.showSelected) {
                        const hiddenOption = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.selectOption)}[hidden]`);
                        setTimeout((() => {
                            if (hiddenOption) hiddenOption.hidden = false;
                            optionItem.hidden = true;
                        }), this.config.speed);
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.updateOriginalSelectSelectedOptions(originalSelect, selectItem);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
        }
        updateAriaExpandedAttr(selectItem, selectOptions) {
            let isOpen = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            selectItem.setAttribute("aria-expanded", `${isOpen ? true : false}`);
            selectOptions.setAttribute("aria-expanded", `${isOpen ? true : false}`);
        }
        updateOriginalSelectSelectedOptions(originalSelect, selectItem) {
            const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
            const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.selectOptionSelected));
            originalSelectSelectedItems.forEach((selectedItem => selectedItem.removeAttribute("selected")));
            selectSelectedItems.forEach((selectSelectedItems => {
                originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "");
            }));
        }
        searchActions(selectItem) {
            if (!this.config.searchSelected) return;
            const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
            const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            const selectOptionsItems = selectOptions.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
            if (selectInput?.value === "") selectOptionsItems.forEach((selectOptionsItem => selectOptionsItem.hidden = false));
            const checkHiddenOptions = () => !selectOptions.querySelector(`${this.getSelectClass(this.selectClasses.selectOption)}:not([hidden])`);
            const checkSelectedOptions = () => Array.from(selectOptionsItems).every((selectOptionsItem => selectOptionsItem.classList.contains(this.selectClasses.selectOptionSelected)));
            const filteredOptions = value => {
                if (checkSelectedOptions()) return;
                const selectNotice = selectOptions.querySelector(this.getSelectClass(this.selectClasses.selectNotice));
                selectOptionsItems.forEach((selectOptionsItem => {
                    if (selectOptionsItem.textContent.toUpperCase().includes(value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                }));
                if (checkHiddenOptions()) {
                    if (selectNotice) return;
                    selectOptions.insertAdjacentHTML("afterbegin", `<div class=${this.selectClasses.selectNotice}>${this.config.noResultsText}</div>`);
                } else if (selectNotice) selectNotice.remove();
                if (selectOptions.hidden === true) this.selectAction(selectItem);
            };
            selectInput?.addEventListener("input", (_ref => {
                let {target: {value}} = _ref;
                return utils_debounce(filteredOptions(value));
            }), 200);
        }
        selectChange(e) {
            const originalSelect = e.target;
            this.selectBuild(originalSelect);
            this.setSelectChange(originalSelect);
        }
        setSelectChange(originalSelect) {
            if (originalSelect.hasAttribute(this.selectAttributes.submit) && originalSelect.value) {
                let tempButton = document.createElement("button");
                tempButton.type = "submit";
                originalSelect.closest("form").append(tempButton);
                tempButton.click();
                tempButton.remove();
            }
            const selectItem = originalSelect.parentElement;
            this.selectCallback(selectItem, originalSelect);
        }
        selectDisabled(selectItem, originalSelect) {
            const {selectElement} = this.getSelectElement(selectItem, this.selectClasses.selectTitle);
            if (originalSelect.disabled) {
                selectItem.classList.add(this.selectClasses.selectDisabled);
                if (selectElement) selectElement.disabled = true;
            } else {
                selectItem.classList.remove(this.selectClasses.selectDisabled);
                if (selectElement) selectElement.disabled = false;
            }
        }
        closeSelects(selectOneGroup) {
            const selectsGroup = selectOneGroup || document;
            const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.select)}${this.getSelectClass(this.selectClasses.selectOpen)}`);
            if (selectActiveItems.length > 0) selectActiveItems.forEach((selectActiveItem => this.closeCurrentSelect(selectActiveItem)));
        }
        closeCurrentSelect(selectItem) {
            const {originalSelect} = this.getSelectElement(selectItem);
            const {speed} = originalSelect.dataset;
            const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            if (!selectOptions.classList.contains("slide")) {
                selectItem.classList.remove(this.selectClasses.selectOpen);
                this.updateAriaExpandedAttr(selectItem, selectOptions);
                _slideUp(selectOptions, speed);
                setTimeout((() => {
                    selectItem.style.zIndex = "";
                }), speed);
            }
        }
        removeSelectItemActiveDescendant(selectItem) {
            const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
            selectItem.removeAttribute("aria-activedescendant");
            if (selectInput) selectInput.removeAttribute("aria-activedescendant");
        }
        removeOptionHighlightedClass(selectItem) {
            const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            const selectOptionsItems = selectOptions.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
            if (selectOptionsItems.length > 0) selectOptionsItems.forEach((selectOptionItem => selectOptionItem.classList.remove(this.selectClasses.selectHighlighted)));
        }
        resetHighLightedIndex(multiple) {
            let selectPlaceholder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            if (!multiple) {
                if (this.config.showSelected) if (selectPlaceholder && this.getSelectPlaceholder(selectPlaceholder).show) this.#highlightedIndex = 0; else this.#highlightedIndex = -1;
            } else this.#highlightedIndex = -1;
        }
        setOptions(selectItem, originalSelect) {
            const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            selectItemOptions.innerHTML = this.getOptionsHTML(originalSelect);
        }
        setSelectItemActiveDescendant(selectItem, selectOption) {
            const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
            const selectOptionId = this.getSelectOptionId(selectOption);
            selectItem.setAttribute("aria-activedescendant", selectOptionId);
            if (selectInput) selectInput.setAttribute("aria-activedescendant", selectOptionId);
        }
        setSelectTitleValue(selectItem, originalSelect) {
            const {multiple} = originalSelect;
            const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.selectBody).selectElement;
            const selectItemTitles = selectItemBody.querySelectorAll(this.getSelectClass(this.selectClasses.selectTitle));
            const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
            if (selectItemTitles.length > 0) selectItemTitles.forEach((title => title.remove()));
            if (selectInput) selectInput.value = "";
            selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            if (multiple) this.searchActions(selectItem);
        }
        setOptionsPosition(selectItem) {
            const {originalSelect} = this.getSelectElement(selectItem);
            const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            const selectItemDropdown = this.getSelectElement(selectItem, this.selectClasses.selectDropdown).selectElement;
            if (!selectOptions || !selectItemDropdown) return;
            const {scroll, optionsMargin, speed} = originalSelect.dataset;
            const customMaxHeightValue = +scroll ? `${+scroll}px` : ``;
            const selectOptionsPosMargin = +optionsMargin || 10;
            if (selectItem.classList.contains(this.selectClasses.selectOpen)) {
                setTimeout((() => {
                    selectItem.classList.remove("select--show-top");
                    selectItemDropdown.style.maxHeight = customMaxHeightValue;
                }), +speed);
                return;
            }
            selectOptions.hidden = false;
            const selectItemDropdownHeight = selectItemDropdown.offsetHeight || parseInt(window.getComputedStyle(selectItemDropdown).getPropertyValue("max-height"));
            const selectOptionsHeight = selectOptions.offsetHeight > selectItemDropdownHeight ? selectOptions.offsetHeight : selectItemDropdownHeight + selectOptions.offsetHeight;
            const selectOptionsScrollHeight = selectOptionsHeight - selectItemDropdownHeight;
            selectOptions.hidden = true;
            const selectItemHeight = selectItem.offsetHeight;
            const selectItemPos = selectItem.getBoundingClientRect().top;
            const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
            const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
            if (selectItemResult < 0) {
                const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                if (newMaxHeightValue < 100) {
                    selectItem.classList.add("select--show-top");
                    selectItemDropdown.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                } else {
                    selectItem.classList.remove("select--show-top");
                    selectItemDropdown.style.maxHeight = `${newMaxHeightValue}px`;
                }
            }
        }
        getOptionsHTML(originalSelect) {
            const {multiple, options, dataset} = originalSelect;
            const selectOptionsScroll = originalSelect.hasAttribute(this.selectAttributes.scroll) ? `data-simplebar` : "";
            const customMaxHeightValue = +dataset.scroll || 200;
            const ariaMultiselectTable = multiple ? `aria-multiselectable="true"` : "";
            let selectOptions = [ ...options ];
            if (!selectOptions.length) return;
            const selectPlaceholder = selectOptions.find((option => !option.value));
            if (selectPlaceholder && !this.getSelectPlaceholder(selectPlaceholder).show || multiple) selectOptions = selectOptions.filter((option => option.value));
            const selectOptionsHTML = `\n       <div \n          class="${this.selectClasses.selectDropdown}"\n          ${selectOptionsScroll} \n          ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""}\n          ${ariaMultiselectTable}\n          role="listbox"\n          >\n           ${selectOptions.map(((option, index) => this.getOptionHTML(option, originalSelect, index + 1))).join("")}\n       </div>`;
            return selectOptionsHTML;
        }
        getOptionHTML(selectOption, originalSelect, index) {
            const {selected, value, dataset} = selectOption;
            const {multiple, id, name} = originalSelect;
            const selectOptionId = id || name || `selected`;
            const placeholderClass = !value && this.config.placeholder ? ` ${this.selectClasses.selectPlaceholder}` : "";
            const selectOptionSelected = selected ? ` ${this.selectClasses.selectOptionSelected}` : "";
            const selectOptionHide = selected && !this.config.showSelected && !multiple ? `hidden` : ``;
            const selectOptionClass = dataset.class ? ` ${dataset.class}` : "";
            const selectOptionLink = dataset.href || false;
            const selectLinkClass = selectOptionLink ? ` ${this.selectClasses.selectLink}` : "";
            const ariaSelected = selected ? `aria-selected="true"` : `aria-selected="false"`;
            const selectOptionLinkTarget = selectOption.hasAttribute(this.selectAttributes.hrefBlank) ? `target="_blank"` : "";
            const optionText = this.config.selectOptionText ? `data-select-text="${this.config.selectOptionText}"` : "";
            let selectOptionHTML = ``;
            if (selectOptionLink) selectOptionHTML = `\n          <a \n            id=select--${selectOptionId}-item-${index}\n            class="${this.selectClasses.selectOption}${selectLinkClass}${selectOptionClass}${placeholderClass}${selectOptionSelected}" \n            href="${selectOptionLink}"\n            role="option"\n            ${selectOptionLinkTarget} \n            data-value="${value}" \n            ${optionText}\n            ${selectOptionHide} \n            ${ariaSelected}>\n              ${this.getSelectElementContent(selectOption)}\n          </a>`; else selectOptionHTML = `\n          <button \n            id=select--${selectOptionId}-item-${index}\n            class="${this.selectClasses.selectOption}${selectOptionClass}${placeholderClass}${selectOptionSelected}" \n            data-value="${value}"\n            role="option"\n            ${selectOptionHide} \n            ${optionText}\n            ${ariaSelected} \n            type="button">\n              ${this.getSelectElementContent(selectOption)}\n          </button>`;
            return selectOptionHTML;
        }
        getSelectTitleValue(selectItem, originalSelect) {
            const {multiple, id, dataset: {placeholder, tags}} = originalSelect;
            const {elements, values, html} = this.getSelectedOptionsData(originalSelect);
            const selectLabel = this.getSelectLabel(id);
            const emptyValue = Array.from(originalSelect.options).find((option => !option.value));
            const customClass = elements[0]?.dataset.class ? ` ${elements[0].dataset.class}` : "";
            const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
            const selectTitleValue = [];
            if (html.length) selectTitleValue.push(html);
            values.length ? selectItem.classList.add(this.selectClasses.selectActive) : selectItem.classList.remove(this.selectClasses.selectActive);
            const renderOption = optionValue => {
                const placeholderClass = emptyValue?.textContent.includes(optionValue) && this.config.placeholder && !multiple ? ` ${this.selectClasses.selectPlaceholder}` : "";
                return `\n              <div\n                class="${this.selectClasses.selectTitle}${customClass}${placeholderClass}"\n                data-select-id="${selectItem.dataset.id}"\n                data-value="${optionValue}"\n                aria-selected="true"\n                role="option"\n              >\n                ${optionValue}\n                ${this.config.removeItemButton && multiple ? this.getRemoveItemButtonHTML(selectItem, optionValue) : ""}\n              </div>\n          `;
            };
            if (multiple) {
                if (tags && document.querySelector(tags)) elements.length ? document.querySelector(tags).innerHTML = elements.map((option => this.getSelectTagHTML(selectItem, option))).join("") : document.querySelector(tags).innerHTML = "";
                if (!selectInput) return this.getSearchInputHTML(placeholder, selectLabel?.textContent); else return elements.map((option => renderOption(option.value))).join("");
            }
            return renderOption(selectTitleValue);
        }
        getSelectTagHTML(selectItem, option) {
            return `\n        <span\n          class="${this.selectClasses.selectTag}"\n          data-select-id="${selectItem.dataset.id}"\n          data-value="${option.value}"\n          aria-label="Remove item: ${option.value}"\n          role=button>\n           ${this.getSelectElementContent(option)}\n        </span>\n     `;
        }
        getSearchInputHTML(placeholder, label) {
            return `\n        <input\n          class="${this.selectClasses.selectInput}"\n          type="search"\n          autocomplete="off"\n          autocapitalize="off"\n          aria-autocomplete="list"\n          spellcheck="false"\n          role="textbox"\n          ${placeholder || label ? `aria-label="${placeholder || label}"` : ""}\n          ${placeholder ? `placeholder="${placeholder}"` : ""}\n          ${placeholder ? `data-placeholder="${placeholder}"` : ""}\n        >\n      `;
        }
        getRemoveItemButtonHTML(selectItem, value) {
            return `\n        <button\n          class="${this.selectClasses.selectButton}"\n          data-select-id="${selectItem.dataset.id}"\n          data-value="${value}"\n          aria-label="Remove item: ${value}"\n          type=button\n        ></button>\n    `;
        }
        getSelectBodyHTML() {
            return `\n      <div class="${this.selectClasses.selectBody}" role="listbox">\n         <div hidden class="${this.selectClasses.selectOptions}" aria-expanded=false></div>\n      </div>`;
        }
        getVisibleSelectOptionsItems(selectItem) {
            const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
            const selectOptionsItems = selectOptions.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
            return Array.from(selectOptionsItems).filter((option => !option.hidden));
        }
        getSelectedOptionsData(originalSelect) {
            const {multiple, options, selectedIndex} = originalSelect;
            const selectedOptions = multiple ? Array.from(options).filter((option => option.value && option.selected)) : [ options[selectedIndex] ];
            return {
                elements: selectedOptions,
                values: selectedOptions.map((option => option.value)),
                html: selectedOptions.map((option => this.getSelectElementContent(option)))
            };
        }
        getSelectElementContent(selectOption) {
            const {asset} = selectOption.dataset;
            const selectOptionDataHTML = asset?.includes("img") ? `<img src="${asset}" alt="">` : asset || "";
            let selectOptionContentHTML = ``;
            if (asset) selectOptionContentHTML += `\n              <div class="${this.selectClasses.selectRow}">\n                <div class="${this.selectClasses.selectData}">\n                  ${selectOptionDataHTML || ""}\n                </div>\n                <span class="${this.selectClasses.selectText}">\n                  ${selectOption.textContent}\n                </span>\n              </div>\n            `; else selectOptionContentHTML = selectOption.textContent;
            return selectOptionContentHTML;
        }
        getSelectPlaceholder(selectPlaceholder) {
            const {textContent: value} = selectPlaceholder;
            return {
                value,
                show: selectPlaceholder.hasAttribute(this.selectAttributes.show)
            };
        }
        getSelectClass(className) {
            return `.${className}`;
        }
        getSelectElement(selectItem, className) {
            return {
                originalSelect: selectItem.querySelector("select"),
                selectElement: selectItem.querySelector(this.getSelectClass(className))
            };
        }
        getSelectOptionId(selectOption) {
            return selectOption.getAttribute("id");
        }
        getSelectLabel(selectId) {
            return Array.from(document.querySelectorAll("label")).find((label => label.getAttribute("for") === selectId));
        }
        selectCallback(selectItem, originalSelect) {
            document.dispatchEvent(new CustomEvent("selectCallback", {
                detail: {
                    parent: selectItem,
                    select: originalSelect
                }
            }));
        }
        #setLogging(message) {
            if (this.config.logging) FLS(`[Select]: ${message} `);
        }
    }
    objectModules.select = new Select({
        selectOptionText: ""
    });
    var commonjsGlobal = typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : {};
    var NumeralFormatter = function(numeralDecimalMark, numeralIntegerScale, numeralDecimalScale, numeralThousandsGroupStyle, numeralPositiveOnly, stripLeadingZeroes, prefix, signBeforePrefix, tailPrefix, delimiter) {
        var owner = this;
        owner.numeralDecimalMark = numeralDecimalMark || ".";
        owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
        owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
        owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
        owner.numeralPositiveOnly = !!numeralPositiveOnly;
        owner.stripLeadingZeroes = stripLeadingZeroes !== false;
        owner.prefix = prefix || prefix === "" ? prefix : "";
        owner.signBeforePrefix = !!signBeforePrefix;
        owner.tailPrefix = !!tailPrefix;
        owner.delimiter = delimiter || delimiter === "" ? delimiter : ",";
        owner.delimiterRE = delimiter ? new RegExp("\\" + delimiter, "g") : "";
    };
    NumeralFormatter.groupStyle = {
        thousand: "thousand",
        lakh: "lakh",
        wan: "wan",
        none: "none"
    };
    NumeralFormatter.prototype = {
        getRawValue: function(value) {
            return value.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".");
        },
        format: function(value) {
            var parts, partSign, partSignAndPrefix, partInteger, owner = this, partDecimal = "";
            value = value.replace(/[A-Za-z]/g, "").replace(owner.numeralDecimalMark, "M").replace(/[^\dM-]/g, "").replace(/^\-/, "N").replace(/\-/g, "").replace("N", owner.numeralPositiveOnly ? "" : "-").replace("M", owner.numeralDecimalMark);
            if (owner.stripLeadingZeroes) value = value.replace(/^(-)?0+(?=\d)/, "$1");
            partSign = value.slice(0, 1) === "-" ? "-" : "";
            if (typeof owner.prefix != "undefined") if (owner.signBeforePrefix) partSignAndPrefix = partSign + owner.prefix; else partSignAndPrefix = owner.prefix + partSign; else partSignAndPrefix = partSign;
            partInteger = value;
            if (value.indexOf(owner.numeralDecimalMark) >= 0) {
                parts = value.split(owner.numeralDecimalMark);
                partInteger = parts[0];
                partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
            }
            if (partSign === "-") partInteger = partInteger.slice(1);
            if (owner.numeralIntegerScale > 0) partInteger = partInteger.slice(0, owner.numeralIntegerScale);
            switch (owner.numeralThousandsGroupStyle) {
              case NumeralFormatter.groupStyle.lakh:
                partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + owner.delimiter);
                break;

              case NumeralFormatter.groupStyle.wan:
                partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, "$1" + owner.delimiter);
                break;

              case NumeralFormatter.groupStyle.thousand:
                partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, "$1" + owner.delimiter);
                break;
            }
            if (owner.tailPrefix) return partSign + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : "") + owner.prefix;
            return partSignAndPrefix + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : "");
        }
    };
    var NumeralFormatter_1 = NumeralFormatter;
    var DateFormatter = function(datePattern, dateMin, dateMax) {
        var owner = this;
        owner.date = [];
        owner.blocks = [];
        owner.datePattern = datePattern;
        owner.dateMin = dateMin.split("-").reverse().map((function(x) {
            return parseInt(x, 10);
        }));
        if (owner.dateMin.length === 2) owner.dateMin.unshift(0);
        owner.dateMax = dateMax.split("-").reverse().map((function(x) {
            return parseInt(x, 10);
        }));
        if (owner.dateMax.length === 2) owner.dateMax.unshift(0);
        owner.initBlocks();
    };
    DateFormatter.prototype = {
        initBlocks: function() {
            var owner = this;
            owner.datePattern.forEach((function(value) {
                if (value === "Y") owner.blocks.push(4); else owner.blocks.push(2);
            }));
        },
        getISOFormatDate: function() {
            var owner = this, date = owner.date;
            return date[2] ? date[2] + "-" + owner.addLeadingZero(date[1]) + "-" + owner.addLeadingZero(date[0]) : "";
        },
        getBlocks: function() {
            return this.blocks;
        },
        getValidatedDate: function(value) {
            var owner = this, result = "";
            value = value.replace(/[^\d]/g, "");
            owner.blocks.forEach((function(length, index) {
                if (value.length > 0) {
                    var sub = value.slice(0, length), sub0 = sub.slice(0, 1), rest = value.slice(length);
                    switch (owner.datePattern[index]) {
                      case "d":
                        if (sub === "00") sub = "01"; else if (parseInt(sub0, 10) > 3) sub = "0" + sub0; else if (parseInt(sub, 10) > 31) sub = "31";
                        break;

                      case "m":
                        if (sub === "00") sub = "01"; else if (parseInt(sub0, 10) > 1) sub = "0" + sub0; else if (parseInt(sub, 10) > 12) sub = "12";
                        break;
                    }
                    result += sub;
                    value = rest;
                }
            }));
            return this.getFixedDateString(result);
        },
        getFixedDateString: function(value) {
            var day, month, year, owner = this, datePattern = owner.datePattern, date = [], dayIndex = 0, monthIndex = 0, yearIndex = 0, dayStartIndex = 0, monthStartIndex = 0, yearStartIndex = 0, fullYearDone = false;
            if (value.length === 4 && datePattern[0].toLowerCase() !== "y" && datePattern[1].toLowerCase() !== "y") {
                dayStartIndex = datePattern[0] === "d" ? 0 : 2;
                monthStartIndex = 2 - dayStartIndex;
                day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                date = this.getFixedDate(day, month, 0);
            }
            if (value.length === 8) {
                datePattern.forEach((function(type, index) {
                    switch (type) {
                      case "d":
                        dayIndex = index;
                        break;

                      case "m":
                        monthIndex = index;
                        break;

                      default:
                        yearIndex = index;
                        break;
                    }
                }));
                yearStartIndex = yearIndex * 2;
                dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
                monthStartIndex = monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;
                day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
                fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
                date = this.getFixedDate(day, month, year);
            }
            if (value.length === 4 && (datePattern[0] === "y" || datePattern[1] === "y")) {
                monthStartIndex = datePattern[0] === "m" ? 0 : 2;
                yearStartIndex = 2 - monthStartIndex;
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);
                fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;
                date = [ 0, month, year ];
            }
            if (value.length === 6 && (datePattern[0] === "Y" || datePattern[1] === "Y")) {
                monthStartIndex = datePattern[0] === "m" ? 0 : 4;
                yearStartIndex = 2 - .5 * monthStartIndex;
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
                fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
                date = [ 0, month, year ];
            }
            date = owner.getRangeFixedDate(date);
            owner.date = date;
            var result = date.length === 0 ? value : datePattern.reduce((function(previous, current) {
                switch (current) {
                  case "d":
                    return previous + (date[0] === 0 ? "" : owner.addLeadingZero(date[0]));

                  case "m":
                    return previous + (date[1] === 0 ? "" : owner.addLeadingZero(date[1]));

                  case "y":
                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : "");

                  case "Y":
                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : "");
                }
            }), "");
            return result;
        },
        getRangeFixedDate: function(date) {
            var owner = this, datePattern = owner.datePattern, dateMin = owner.dateMin || [], dateMax = owner.dateMax || [];
            if (!date.length || dateMin.length < 3 && dateMax.length < 3) return date;
            if (datePattern.find((function(x) {
                return x.toLowerCase() === "y";
            })) && date[2] === 0) return date;
            if (dateMax.length && (dateMax[2] < date[2] || dateMax[2] === date[2] && (dateMax[1] < date[1] || dateMax[1] === date[1] && dateMax[0] < date[0]))) return dateMax;
            if (dateMin.length && (dateMin[2] > date[2] || dateMin[2] === date[2] && (dateMin[1] > date[1] || dateMin[1] === date[1] && dateMin[0] > date[0]))) return dateMin;
            return date;
        },
        getFixedDate: function(day, month, year) {
            day = Math.min(day, 31);
            month = Math.min(month, 12);
            year = parseInt(year || 0, 10);
            if (month < 7 && month % 2 === 0 || month > 8 && month % 2 === 1) day = Math.min(day, month === 2 ? this.isLeapYear(year) ? 29 : 28 : 30);
            return [ day, month, year ];
        },
        isLeapYear: function(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        },
        addLeadingZero: function(number) {
            return (number < 10 ? "0" : "") + number;
        },
        addLeadingZeroForYear: function(number, fullYearMode) {
            if (fullYearMode) return (number < 10 ? "000" : number < 100 ? "00" : number < 1e3 ? "0" : "") + number;
            return (number < 10 ? "0" : "") + number;
        }
    };
    var DateFormatter_1 = DateFormatter;
    var TimeFormatter = function(timePattern, timeFormat) {
        var owner = this;
        owner.time = [];
        owner.blocks = [];
        owner.timePattern = timePattern;
        owner.timeFormat = timeFormat;
        owner.initBlocks();
    };
    TimeFormatter.prototype = {
        initBlocks: function() {
            var owner = this;
            owner.timePattern.forEach((function() {
                owner.blocks.push(2);
            }));
        },
        getISOFormatTime: function() {
            var owner = this, time = owner.time;
            return time[2] ? owner.addLeadingZero(time[0]) + ":" + owner.addLeadingZero(time[1]) + ":" + owner.addLeadingZero(time[2]) : "";
        },
        getBlocks: function() {
            return this.blocks;
        },
        getTimeFormatOptions: function() {
            var owner = this;
            if (String(owner.timeFormat) === "12") return {
                maxHourFirstDigit: 1,
                maxHours: 12,
                maxMinutesFirstDigit: 5,
                maxMinutes: 60
            };
            return {
                maxHourFirstDigit: 2,
                maxHours: 23,
                maxMinutesFirstDigit: 5,
                maxMinutes: 60
            };
        },
        getValidatedTime: function(value) {
            var owner = this, result = "";
            value = value.replace(/[^\d]/g, "");
            var timeFormatOptions = owner.getTimeFormatOptions();
            owner.blocks.forEach((function(length, index) {
                if (value.length > 0) {
                    var sub = value.slice(0, length), sub0 = sub.slice(0, 1), rest = value.slice(length);
                    switch (owner.timePattern[index]) {
                      case "h":
                        if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) sub = "0" + sub0; else if (parseInt(sub, 10) > timeFormatOptions.maxHours) sub = timeFormatOptions.maxHours + "";
                        break;

                      case "m":
                      case "s":
                        if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) sub = "0" + sub0; else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) sub = timeFormatOptions.maxMinutes + "";
                        break;
                    }
                    result += sub;
                    value = rest;
                }
            }));
            return this.getFixedTimeString(result);
        },
        getFixedTimeString: function(value) {
            var second, minute, hour, owner = this, timePattern = owner.timePattern, time = [], secondIndex = 0, minuteIndex = 0, hourIndex = 0, secondStartIndex = 0, minuteStartIndex = 0, hourStartIndex = 0;
            if (value.length === 6) {
                timePattern.forEach((function(type, index) {
                    switch (type) {
                      case "s":
                        secondIndex = index * 2;
                        break;

                      case "m":
                        minuteIndex = index * 2;
                        break;

                      case "h":
                        hourIndex = index * 2;
                        break;
                    }
                }));
                hourStartIndex = hourIndex;
                minuteStartIndex = minuteIndex;
                secondStartIndex = secondIndex;
                second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
                minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
                hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
                time = this.getFixedTime(hour, minute, second);
            }
            if (value.length === 4 && owner.timePattern.indexOf("s") < 0) {
                timePattern.forEach((function(type, index) {
                    switch (type) {
                      case "m":
                        minuteIndex = index * 2;
                        break;

                      case "h":
                        hourIndex = index * 2;
                        break;
                    }
                }));
                hourStartIndex = hourIndex;
                minuteStartIndex = minuteIndex;
                second = 0;
                minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
                hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
                time = this.getFixedTime(hour, minute, second);
            }
            owner.time = time;
            return time.length === 0 ? value : timePattern.reduce((function(previous, current) {
                switch (current) {
                  case "s":
                    return previous + owner.addLeadingZero(time[2]);

                  case "m":
                    return previous + owner.addLeadingZero(time[1]);

                  case "h":
                    return previous + owner.addLeadingZero(time[0]);
                }
            }), "");
        },
        getFixedTime: function(hour, minute, second) {
            second = Math.min(parseInt(second || 0, 10), 60);
            minute = Math.min(minute, 60);
            hour = Math.min(hour, 60);
            return [ hour, minute, second ];
        },
        addLeadingZero: function(number) {
            return (number < 10 ? "0" : "") + number;
        }
    };
    var TimeFormatter_1 = TimeFormatter;
    var PhoneFormatter = function(formatter, delimiter) {
        var owner = this;
        owner.delimiter = delimiter || delimiter === "" ? delimiter : " ";
        owner.delimiterRE = delimiter ? new RegExp("\\" + delimiter, "g") : "";
        owner.formatter = formatter;
    };
    PhoneFormatter.prototype = {
        setFormatter: function(formatter) {
            this.formatter = formatter;
        },
        format: function(phoneNumber) {
            var owner = this;
            owner.formatter.clear();
            phoneNumber = phoneNumber.replace(/[^\d+]/g, "");
            phoneNumber = phoneNumber.replace(/^\+/, "B").replace(/\+/g, "").replace("B", "+");
            phoneNumber = phoneNumber.replace(owner.delimiterRE, "");
            var current, result = "", validated = false;
            for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
                current = owner.formatter.inputDigit(phoneNumber.charAt(i));
                if (/[\s()-]/g.test(current)) {
                    result = current;
                    validated = true;
                } else if (!validated) result = current;
            }
            result = result.replace(/[()]/g, "");
            result = result.replace(/[\s-]/g, owner.delimiter);
            return result;
        }
    };
    var PhoneFormatter_1 = PhoneFormatter;
    var CreditCardDetector = {
        blocks: {
            uatp: [ 4, 5, 6 ],
            amex: [ 4, 6, 5 ],
            diners: [ 4, 6, 4 ],
            discover: [ 4, 4, 4, 4 ],
            mastercard: [ 4, 4, 4, 4 ],
            dankort: [ 4, 4, 4, 4 ],
            instapayment: [ 4, 4, 4, 4 ],
            jcb15: [ 4, 6, 5 ],
            jcb: [ 4, 4, 4, 4 ],
            maestro: [ 4, 4, 4, 4 ],
            visa: [ 4, 4, 4, 4 ],
            mir: [ 4, 4, 4, 4 ],
            unionPay: [ 4, 4, 4, 4 ],
            general: [ 4, 4, 4, 4 ]
        },
        re: {
            uatp: /^(?!1800)1\d{0,14}/,
            amex: /^3[47]\d{0,13}/,
            discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
            diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
            mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
            dankort: /^(5019|4175|4571)\d{0,12}/,
            instapayment: /^63[7-9]\d{0,13}/,
            jcb15: /^(?:2131|1800)\d{0,11}/,
            jcb: /^(?:35\d{0,2})\d{0,12}/,
            maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
            mir: /^220[0-4]\d{0,12}/,
            visa: /^4\d{0,15}/,
            unionPay: /^(62|81)\d{0,14}/
        },
        getStrictBlocks: function(block) {
            var total = block.reduce((function(prev, current) {
                return prev + current;
            }), 0);
            return block.concat(19 - total);
        },
        getInfo: function(value, strictMode) {
            var blocks = CreditCardDetector.blocks, re = CreditCardDetector.re;
            strictMode = !!strictMode;
            for (var key in re) if (re[key].test(value)) {
                var matchedBlocks = blocks[key];
                return {
                    type: key,
                    blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks
                };
            }
            return {
                type: "unknown",
                blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general
            };
        }
    };
    var CreditCardDetector_1 = CreditCardDetector;
    var Util = {
        noop: function() {},
        strip: function(value, re) {
            return value.replace(re, "");
        },
        getPostDelimiter: function(value, delimiter, delimiters) {
            if (delimiters.length === 0) return value.slice(-delimiter.length) === delimiter ? delimiter : "";
            var matchedDelimiter = "";
            delimiters.forEach((function(current) {
                if (value.slice(-current.length) === current) matchedDelimiter = current;
            }));
            return matchedDelimiter;
        },
        getDelimiterREByDelimiter: function(delimiter) {
            return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
        },
        getNextCursorPosition: function(prevPos, oldValue, newValue, delimiter, delimiters) {
            if (oldValue.length === prevPos) return newValue.length;
            return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
        },
        getPositionOffset: function(prevPos, oldValue, newValue, delimiter, delimiters) {
            var oldRawValue, newRawValue, lengthOffset;
            oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
            newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
            lengthOffset = oldRawValue.length - newRawValue.length;
            return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
        },
        stripDelimiters: function(value, delimiter, delimiters) {
            var owner = this;
            if (delimiters.length === 0) {
                var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : "";
                return value.replace(delimiterRE, "");
            }
            delimiters.forEach((function(current) {
                current.split("").forEach((function(letter) {
                    value = value.replace(owner.getDelimiterREByDelimiter(letter), "");
                }));
            }));
            return value;
        },
        headStr: function(str, length) {
            return str.slice(0, length);
        },
        getMaxLength: function(blocks) {
            return blocks.reduce((function(previous, current) {
                return previous + current;
            }), 0);
        },
        getPrefixStrippedValue: function(value, prefix, prefixLength, prevResult, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix) {
            if (prefixLength === 0) return value;
            if (value === prefix && value !== "") return "";
            if (signBeforePrefix && value.slice(0, 1) == "-") {
                var prev = prevResult.slice(0, 1) == "-" ? prevResult.slice(1) : prevResult;
                return "-" + this.getPrefixStrippedValue(value.slice(1), prefix, prefixLength, prev, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix);
            }
            if (prevResult.slice(0, prefixLength) !== prefix && !tailPrefix) {
                if (noImmediatePrefix && !prevResult && value) return value;
                return "";
            } else if (prevResult.slice(-prefixLength) !== prefix && tailPrefix) {
                if (noImmediatePrefix && !prevResult && value) return value;
                return "";
            }
            var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters);
            if (value.slice(0, prefixLength) !== prefix && !tailPrefix) return prevValue.slice(prefixLength); else if (value.slice(-prefixLength) !== prefix && tailPrefix) return prevValue.slice(0, -prefixLength - 1);
            return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength);
        },
        getFirstDiffIndex: function(prev, current) {
            var index = 0;
            while (prev.charAt(index) === current.charAt(index)) if (prev.charAt(index++) === "") return -1;
            return index;
        },
        getFormattedValue: function(value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
            var result = "", multipleDelimiters = delimiters.length > 0, currentDelimiter = "";
            if (blocksLength === 0) return value;
            blocks.forEach((function(length, index) {
                if (value.length > 0) {
                    var sub = value.slice(0, length), rest = value.slice(length);
                    if (multipleDelimiters) currentDelimiter = delimiters[delimiterLazyShow ? index - 1 : index] || currentDelimiter; else currentDelimiter = delimiter;
                    if (delimiterLazyShow) {
                        if (index > 0) result += currentDelimiter;
                        result += sub;
                    } else {
                        result += sub;
                        if (sub.length === length && index < blocksLength - 1) result += currentDelimiter;
                    }
                    value = rest;
                }
            }));
            return result;
        },
        fixPrefixCursor: function(el, prefix, delimiter, delimiters) {
            if (!el) return;
            var val = el.value, appendix = delimiter || delimiters[0] || " ";
            if (!el.setSelectionRange || !prefix || prefix.length + appendix.length <= val.length) return;
            var len = val.length * 2;
            setTimeout((function() {
                el.setSelectionRange(len, len);
            }), 1);
        },
        checkFullSelection: function(value) {
            try {
                var selection = window.getSelection() || document.getSelection() || {};
                return selection.toString().length === value.length;
            } catch (ex) {}
            return false;
        },
        setSelection: function(element, position, doc) {
            if (element !== this.getActiveElement(doc)) return;
            if (element && element.value.length <= position) return;
            if (element.createTextRange) {
                var range = element.createTextRange();
                range.move("character", position);
                range.select();
            } else try {
                element.setSelectionRange(position, position);
            } catch (e) {
                console.warn("The input element type does not support selection");
            }
        },
        getActiveElement: function(parent) {
            var activeElement = parent.activeElement;
            if (activeElement && activeElement.shadowRoot) return this.getActiveElement(activeElement.shadowRoot);
            return activeElement;
        },
        isAndroid: function() {
            return navigator && /android/i.test(navigator.userAgent);
        },
        isAndroidBackspaceKeydown: function(lastInputValue, currentInputValue) {
            if (!this.isAndroid() || !lastInputValue || !currentInputValue) return false;
            return currentInputValue === lastInputValue.slice(0, -1);
        }
    };
    var Util_1 = Util;
    var DefaultProperties = {
        assign: function(target, opts) {
            target = target || {};
            opts = opts || {};
            target.creditCard = !!opts.creditCard;
            target.creditCardStrictMode = !!opts.creditCardStrictMode;
            target.creditCardType = "";
            target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function() {};
            target.phone = !!opts.phone;
            target.phoneRegionCode = opts.phoneRegionCode || "AU";
            target.phoneFormatter = {};
            target.time = !!opts.time;
            target.timePattern = opts.timePattern || [ "h", "m", "s" ];
            target.timeFormat = opts.timeFormat || "24";
            target.timeFormatter = {};
            target.date = !!opts.date;
            target.datePattern = opts.datePattern || [ "d", "m", "Y" ];
            target.dateMin = opts.dateMin || "";
            target.dateMax = opts.dateMax || "";
            target.dateFormatter = {};
            target.numeral = !!opts.numeral;
            target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
            target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
            target.numeralDecimalMark = opts.numeralDecimalMark || ".";
            target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || "thousand";
            target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
            target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
            target.signBeforePrefix = !!opts.signBeforePrefix;
            target.tailPrefix = !!opts.tailPrefix;
            target.swapHiddenInput = !!opts.swapHiddenInput;
            target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;
            target.uppercase = !!opts.uppercase;
            target.lowercase = !!opts.lowercase;
            target.prefix = target.creditCard || target.date ? "" : opts.prefix || "";
            target.noImmediatePrefix = !!opts.noImmediatePrefix;
            target.prefixLength = target.prefix.length;
            target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
            target.copyDelimiter = !!opts.copyDelimiter;
            target.initValue = opts.initValue !== void 0 && opts.initValue !== null ? opts.initValue.toString() : "";
            target.delimiter = opts.delimiter || opts.delimiter === "" ? opts.delimiter : opts.date ? "/" : opts.time ? ":" : opts.numeral ? "," : opts.phone ? " " : " ";
            target.delimiterLength = target.delimiter.length;
            target.delimiterLazyShow = !!opts.delimiterLazyShow;
            target.delimiters = opts.delimiters || [];
            target.blocks = opts.blocks || [];
            target.blocksLength = target.blocks.length;
            target.root = typeof commonjsGlobal === "object" && commonjsGlobal ? commonjsGlobal : window;
            target.document = opts.document || target.root.document;
            target.maxLength = 0;
            target.backspace = false;
            target.result = "";
            target.onValueChanged = opts.onValueChanged || function() {};
            return target;
        }
    };
    var DefaultProperties_1 = DefaultProperties;
    var Cleave = function(element, opts) {
        var owner = this;
        var hasMultipleElements = false;
        if (typeof element === "string") {
            owner.element = document.querySelector(element);
            hasMultipleElements = document.querySelectorAll(element).length > 1;
        } else if (typeof element.length !== "undefined" && element.length > 0) {
            owner.element = element[0];
            hasMultipleElements = element.length > 1;
        } else owner.element = element;
        if (!owner.element) throw new Error("[cleave.js] Please check the element");
        if (hasMultipleElements) try {
            console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.");
        } catch (e) {}
        opts.initValue = owner.element.value;
        owner.properties = Cleave.DefaultProperties.assign({}, opts);
        owner.init();
    };
    Cleave.prototype = {
        init: function() {
            var owner = this, pps = owner.properties;
            if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && pps.blocksLength === 0 && !pps.prefix) {
                owner.onInput(pps.initValue);
                return;
            }
            pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
            owner.isAndroid = Cleave.Util.isAndroid();
            owner.lastInputValue = "";
            owner.isBackward = "";
            owner.onChangeListener = owner.onChange.bind(owner);
            owner.onKeyDownListener = owner.onKeyDown.bind(owner);
            owner.onFocusListener = owner.onFocus.bind(owner);
            owner.onCutListener = owner.onCut.bind(owner);
            owner.onCopyListener = owner.onCopy.bind(owner);
            owner.initSwapHiddenInput();
            owner.element.addEventListener("input", owner.onChangeListener);
            owner.element.addEventListener("keydown", owner.onKeyDownListener);
            owner.element.addEventListener("focus", owner.onFocusListener);
            owner.element.addEventListener("cut", owner.onCutListener);
            owner.element.addEventListener("copy", owner.onCopyListener);
            owner.initPhoneFormatter();
            owner.initDateFormatter();
            owner.initTimeFormatter();
            owner.initNumeralFormatter();
            if (pps.initValue || pps.prefix && !pps.noImmediatePrefix) owner.onInput(pps.initValue);
        },
        initSwapHiddenInput: function() {
            var owner = this, pps = owner.properties;
            if (!pps.swapHiddenInput) return;
            var inputFormatter = owner.element.cloneNode(true);
            owner.element.parentNode.insertBefore(inputFormatter, owner.element);
            owner.elementSwapHidden = owner.element;
            owner.elementSwapHidden.type = "hidden";
            owner.element = inputFormatter;
            owner.element.id = "";
        },
        initNumeralFormatter: function() {
            var owner = this, pps = owner.properties;
            if (!pps.numeral) return;
            pps.numeralFormatter = new Cleave.NumeralFormatter(pps.numeralDecimalMark, pps.numeralIntegerScale, pps.numeralDecimalScale, pps.numeralThousandsGroupStyle, pps.numeralPositiveOnly, pps.stripLeadingZeroes, pps.prefix, pps.signBeforePrefix, pps.tailPrefix, pps.delimiter);
        },
        initTimeFormatter: function() {
            var owner = this, pps = owner.properties;
            if (!pps.time) return;
            pps.timeFormatter = new Cleave.TimeFormatter(pps.timePattern, pps.timeFormat);
            pps.blocks = pps.timeFormatter.getBlocks();
            pps.blocksLength = pps.blocks.length;
            pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
        },
        initDateFormatter: function() {
            var owner = this, pps = owner.properties;
            if (!pps.date) return;
            pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
            pps.blocks = pps.dateFormatter.getBlocks();
            pps.blocksLength = pps.blocks.length;
            pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
        },
        initPhoneFormatter: function() {
            var owner = this, pps = owner.properties;
            if (!pps.phone) return;
            try {
                pps.phoneFormatter = new Cleave.PhoneFormatter(new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode), pps.delimiter);
            } catch (ex) {
                throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib");
            }
        },
        onKeyDown: function(event) {
            var owner = this, charCode = event.which || event.keyCode;
            owner.lastInputValue = owner.element.value;
            owner.isBackward = charCode === 8;
        },
        onChange: function(event) {
            var owner = this, pps = owner.properties, Util = Cleave.Util;
            owner.isBackward = owner.isBackward || event.inputType === "deleteContentBackward";
            var postDelimiter = Util.getPostDelimiter(owner.lastInputValue, pps.delimiter, pps.delimiters);
            if (owner.isBackward && postDelimiter) pps.postDelimiterBackspace = postDelimiter; else pps.postDelimiterBackspace = false;
            this.onInput(this.element.value);
        },
        onFocus: function() {
            var owner = this, pps = owner.properties;
            owner.lastInputValue = owner.element.value;
            if (pps.prefix && pps.noImmediatePrefix && !owner.element.value) this.onInput(pps.prefix);
            Cleave.Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
        },
        onCut: function(e) {
            if (!Cleave.Util.checkFullSelection(this.element.value)) return;
            this.copyClipboardData(e);
            this.onInput("");
        },
        onCopy: function(e) {
            if (!Cleave.Util.checkFullSelection(this.element.value)) return;
            this.copyClipboardData(e);
        },
        copyClipboardData: function(e) {
            var owner = this, pps = owner.properties, Util = Cleave.Util, inputValue = owner.element.value, textToCopy = "";
            if (!pps.copyDelimiter) textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters); else textToCopy = inputValue;
            try {
                if (e.clipboardData) e.clipboardData.setData("Text", textToCopy); else window.clipboardData.setData("Text", textToCopy);
                e.preventDefault();
            } catch (ex) {}
        },
        onInput: function(value) {
            var owner = this, pps = owner.properties, Util = Cleave.Util;
            var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);
            if (!pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
            if (pps.phone) {
                if (pps.prefix && (!pps.noImmediatePrefix || value.length)) pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length); else pps.result = pps.phoneFormatter.format(value);
                owner.updateValueState();
                return;
            }
            if (pps.numeral) {
                if (pps.prefix && pps.noImmediatePrefix && value.length === 0) pps.result = ""; else pps.result = pps.numeralFormatter.format(value);
                owner.updateValueState();
                return;
            }
            if (pps.date) value = pps.dateFormatter.getValidatedDate(value);
            if (pps.time) value = pps.timeFormatter.getValidatedTime(value);
            value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);
            value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
            value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;
            value = pps.uppercase ? value.toUpperCase() : value;
            value = pps.lowercase ? value.toLowerCase() : value;
            if (pps.prefix) {
                if (pps.tailPrefix) value += pps.prefix; else value = pps.prefix + value;
                if (pps.blocksLength === 0) {
                    pps.result = value;
                    owner.updateValueState();
                    return;
                }
            }
            if (pps.creditCard) owner.updateCreditCardPropsByValue(value);
            value = Util.headStr(value, pps.maxLength);
            pps.result = Util.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters, pps.delimiterLazyShow);
            owner.updateValueState();
        },
        updateCreditCardPropsByValue: function(value) {
            var creditCardInfo, owner = this, pps = owner.properties, Util = Cleave.Util;
            if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) return;
            creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);
            pps.blocks = creditCardInfo.blocks;
            pps.blocksLength = pps.blocks.length;
            pps.maxLength = Util.getMaxLength(pps.blocks);
            if (pps.creditCardType !== creditCardInfo.type) {
                pps.creditCardType = creditCardInfo.type;
                pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
            }
        },
        updateValueState: function() {
            var owner = this, Util = Cleave.Util, pps = owner.properties;
            if (!owner.element) return;
            var endPos = owner.element.selectionEnd;
            var oldValue = owner.element.value;
            var newValue = pps.result;
            endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);
            if (owner.isAndroid) {
                window.setTimeout((function() {
                    owner.element.value = newValue;
                    Util.setSelection(owner.element, endPos, pps.document, false);
                    owner.callOnValueChanged();
                }), 1);
                return;
            }
            owner.element.value = newValue;
            if (pps.swapHiddenInput) owner.elementSwapHidden.value = owner.getRawValue();
            Util.setSelection(owner.element, endPos, pps.document, false);
            owner.callOnValueChanged();
        },
        callOnValueChanged: function() {
            var owner = this, pps = owner.properties;
            pps.onValueChanged.call(owner, {
                target: {
                    name: owner.element.name,
                    value: pps.result,
                    rawValue: owner.getRawValue()
                }
            });
        },
        setPhoneRegionCode: function(phoneRegionCode) {
            var owner = this, pps = owner.properties;
            pps.phoneRegionCode = phoneRegionCode;
            owner.initPhoneFormatter();
            owner.onChange();
        },
        setRawValue: function(value) {
            var owner = this, pps = owner.properties;
            value = value !== void 0 && value !== null ? value.toString() : "";
            if (pps.numeral) value = value.replace(".", pps.numeralDecimalMark);
            pps.postDelimiterBackspace = false;
            owner.element.value = value;
            owner.onInput(value);
        },
        getRawValue: function() {
            var owner = this, pps = owner.properties, Util = Cleave.Util, rawValue = owner.element.value;
            if (pps.rawValueTrimPrefix) rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
            if (pps.numeral) rawValue = pps.numeralFormatter.getRawValue(rawValue); else rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
            return rawValue;
        },
        getISOFormatDate: function() {
            var owner = this, pps = owner.properties;
            return pps.date ? pps.dateFormatter.getISOFormatDate() : "";
        },
        getISOFormatTime: function() {
            var owner = this, pps = owner.properties;
            return pps.time ? pps.timeFormatter.getISOFormatTime() : "";
        },
        getFormattedValue: function() {
            return this.element.value;
        },
        destroy: function() {
            var owner = this;
            owner.element.removeEventListener("input", owner.onChangeListener);
            owner.element.removeEventListener("keydown", owner.onKeyDownListener);
            owner.element.removeEventListener("focus", owner.onFocusListener);
            owner.element.removeEventListener("cut", owner.onCutListener);
            owner.element.removeEventListener("copy", owner.onCopyListener);
        },
        toString: function() {
            return "[Cleave Object]";
        }
    };
    Cleave.NumeralFormatter = NumeralFormatter_1;
    Cleave.DateFormatter = DateFormatter_1;
    Cleave.TimeFormatter = TimeFormatter_1;
    Cleave.PhoneFormatter = PhoneFormatter_1;
    Cleave.CreditCardDetector = CreditCardDetector_1;
    Cleave.Util = Util_1;
    Cleave.DefaultProperties = DefaultProperties_1;
    (typeof commonjsGlobal === "object" && commonjsGlobal ? commonjsGlobal : window)["Cleave"] = Cleave;
    var Cleave_1 = Cleave;
    const cleave_esm = Cleave_1;
    const inputMasks = document.querySelectorAll('input[type="tel"]');
    if (inputMasks.length) inputMasks.forEach((input => {
        input.getAttribute("placeholder");
        let cleaveInstance = null;
        input.addEventListener("focusin", (() => {
            if (cleaveInstance) return;
            cleaveInstance = new cleave_esm(input, {
                prefix: "+38",
                delimiters: [ "(", ")", "-", "-" ],
                blocks: [ 3, 3, 3, 2, 2 ],
                numericOnly: true
            });
        }));
        input.addEventListener("focusout", (() => {
            if (input.value === "+38(") {
                input.value = "";
                cleaveInstance = null;
            }
        }));
    }));
    window["FLS"] = false;
    sidebarToggle();
    addLoadedClass();
    starRating();
    pagination();
    accordion();
    tabs();
    pageNavigation();
    formQuantity();
    initTimer();
    headerScroll();
    headerHeight();
    dropdownLang();
    megaMenuShow();
    burgerMenu();
    showSearchInput();
})();