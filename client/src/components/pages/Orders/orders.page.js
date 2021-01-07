import React, { Component } from "react";

// Bootstrap
import { Container, Row, Col, Jumbotron, Table, Button, Collapse } from "react-bootstrap";

// Styling
import "./orders.page.css"

// Components
import OrderForm from './component/orders.newOrder';

// Functions
import { itemsCalc, itemsTotal } from "./functions/calc.items";
import { largeSandwichCalc, largeSandwichTotal } from "./functions/calc.largesandwich";
import { saladCalc, saladTotal } from "./functions/calc.salads";
import { sideCalc, sideTotal } from "./functions/calc.sides";
import { drinkCalc, drinkTotal } from "./functions/calc.drinks";
import { dessertCalc, dessertTotal } from "./functions/calc.desserts";
import { extraCalc, extraTotal } from "./functions/calc.extras";
import { itemsQuantityTotal, largSandwichQuantityTotal, saladQuantityTotal, sidesQuantityTotal, drinksQuantityTotal, dessertQuantityTotal } from './functions/calc.totalItems'
import { orderFilter } from "./functions/order.filter"

// API routes
import API from "../../../utils/API.orders";

// moment.js
import moment from "moment"

// Modals
import ModalView from "./Modals/modal.orderDetails"
import ModalEdit from "./Modals/modal.orderEdit"

class Orders extends Component {
    state = {
        customerId: "",
        orderList: [],
        organization: "",
        contact: "",
        address: "",
        email: "",
        phone: "",
        lastOrder: "",
        frequentDay: "",
        open: false,
        newOrderDate: "",
        newOrderNumber: "",
        quantityPlatter: 0,
        quantityGlutenFree: 0,
        quantityBrownBag: 0,
        quantityBoxLunch: 0,
        quantityRegNovice: 0,
        quantityRegSnarf: 0,
        quantityRegPro: 0,
        quantitySpecSnarf: 0,
        quantitySpecPro: 0,
        pricePlatter: "89.25",
        priceGlutenFree: "125.00",
        priceBrownBag: "12.50",
        priceBoxLunch: "14.00",
        priceRegNovice: "6.45",
        priceRegSnarf: "9.35",
        priceRegPro: "12.45",
        priceSpecSnarf: "10.35",
        priceSpecPro: "13.65",
        totalPlatter: "0.00",
        totalGlutenFree: "0.00",
        totalBrownBag: "0.00",
        totalBoxLunch: "0.00",
        totalRegNovice: "0.00",
        totalRegSnarf: "0.00",
        totalRegPro: "0.00",
        totalSpecSnarf: "0.00",
        totalSpecPro: "0.00",
        itemsTotal: 0,
        largeSandwichTotal: 0,
        quantityCobb: 0,
        quantityGreek: 0,
        quantitySnarf: 0,
        quantityTossed: 0,
        priceCobb: "36.75",
        priceGreek: "36.75",
        priceSnarf: "36.75",
        priceTossed: "26.25",
        totalCobb: "0.00",
        totalGreek: "0.00",
        totalSnarf: "0.00",
        totalTossed: "0.00",
        saladTotal: 0,
        quantityMacaroni: 0,
        quantityPotato: 0,
        quantityColeslaw: 0,
        quantityPickles: 0,
        quantityChips: 0,
        priceMacaroni: "26.25",
        pricePotato: "26.25",
        priceColeslaw: "26.25",
        pricePickles: "10.50",
        priceChips: "1.75",
        totalMacaroni: "0.00",
        totalPotato: "0.00",
        totalColeslaw: "0.00",
        totalPickle: "0.00",
        totalChip: "0.00",
        sidesTotal: 0,
        quantityBottled: 0,
        quantityIzze: 0,
        quantityArizona: 0,
        quantityGatorade: 0,
        quantitySnapple: 0,
        quantityStewart: 0,
        quantityCan: 0,
        priceBottled: "2.50",
        priceIzze: "2.50",
        priceArizona: "2.50",
        priceGatorade: "2.50",
        priceSnapple: "2.50",
        priceStewart: "2.50",
        priceCan: "1.85",
        totalBottled: "0.00",
        totalIzze: "0.00",
        totalArizona: "0.00",
        totalGatorade: "0.00",
        totalSnapple: "0.00",
        totalStewart: "0.00",
        totalCan: "0.00",
        drinkTotal: 0,
        quantityCookie: 0,
        quantityBrownie: 0,
        priceCookie: "0.85",
        priceBrownie: "2.35",
        totalCookie: "0.00",
        totalBrownie: "0.00",
        dessertTotal: 0,
        quantityArtichoke: 0,
        quantityBacon: 0,
        quantityPortobello: 0,
        quantityAvocado: 0,
        quantityMeat: 0,
        quantityGFBread: 0,
        priceArtichoke: "1.65",
        priceBacon: "1.65",
        pricePortobello: "1.65",
        priceAvocado: "1.65",
        priceMeat: "1.65",
        priceGFBread: "3.00",
        totalArtichoke: "0.00",
        totalBacon: "0.00",
        totalPortobello: "0.00",
        totalAvocado: "0.00",
        totalMeat: "0.00",
        totalGFBread: "0.00",
        extraTotal: 0,
        subtotal: "0.00",
        gratuity: "0.00",
        delivery: "0.00",
        salesTax: "0.00",
        adjustment: "0.00",
        total: "0.00",
        numberofItems: 0,
        notes: "",
        orderID: "",
        arrayPosition: "",
        modalOrderDetailsShow: false,
        modalOrderNumber: "",
        modalOrderDate: "",
        modalNumberOfItems: "",
        modalOrderTotal: "",
        modalOrderNotes: "",
        modalOrderItemsArray: [],
        modalOrderEditShow: false
    }

    componentDidMount() {
        this.loadInfo();
    }

    // load customer info with orders
    loadInfo = () => {
        let url = window.location.search;
        let customerId = url.split("=")[1];
        // console.log(customerId);
        API.info(customerId).then(result => {
            console.log(result.data.Orders);
            this.setState({
                customerId: customerId,
                orderList: result.data.Orders,
                organization: result.data.organization,
                contact: result.data.contactname,
                address: result.data.address,
                email: result.data.email,
                phone: result.data.phone,
                newOrderDate: ""
            })
            if (!this.state.orderList[0]) {
                this.setState({
                    lastOrder: "0"
                })
            } else {
                this.setState({
                    lastOrder: this.state.orderList[0].date
                })
            }
            if (this.state.orderList.length === 0) {
                this.setState({ frequentDay: "NA" })
            } else {
                this.orderDay();
            }
        })
    }

    orderDay = () => {
        let daysoftheWeek = []
        let orders = this.state.orderList
        orders.forEach(info => {
            let convertedDate = moment(info.date).format("dddd");
            daysoftheWeek.push(convertedDate);
        })
        // The function now needs to count the number of instances of a day
        // Create a new array called dayOccurences
        let dayOccurences = [];
        // start the loop
        for (let i = 0; i < daysoftheWeek.length; i++) {
            // first get the day from daysoftheWeek
            let weekDay = daysoftheWeek[i];
            // search the dayOccurence for that day, set the variable to be searchFor
            let indexofDay = dayOccurences.findIndex(index => index.day === weekDay);
            if (indexofDay === -1) {
                // create filter
                let filter = daysoftheWeek.filter(days => days === weekDay);
                // create an object dayResults that will save the weekDay and occurences
                let dayResults = {
                    day: weekDay,
                    occurences: filter.length
                }
                // push into dayOccurences
                dayOccurences.push(dayResults);
            }
        }
        // sort the array from least to greatest of occurences
        let compare = (a, b) => {
            let comparison = 0
            if (a.occurences >= b.occurences) {
                comparison = 1;
            } else if (a.occurences <= b.occurences) {
                comparison = -1
            }
            return comparison
        }
        let sortedDays = dayOccurences.sort(compare);
        let frequentDay = sortedDays[sortedDays.length - 1].day;
        this.setState({ frequentDay: frequentDay })
    }

    handleInputChange = event => {
        event.preventDefault()
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        return [name, value]
    }

    // Calculate totals
    calculate = event => {
        event.preventDefault()
        let data = this.handleInputChange(event);
        let name = data[0];
        let value = data[1]
        var calculation;
        switch (name) {
            case "quantityPlatter":
            case "quantityGlutenFree":
            case "quantityBrownBag":
            case "quantityBoxLunch":
                calculation = itemsCalc(name, value, this.state.pricePlatter, this.state.priceGlutenFree, this.state.priceBrownBag, this.state.priceBoxLunch);
                break
            case "quantityRegNovice":
            case "quantityRegSnarf":
            case "quantityRegPro":
            case "quantitySpecSnarf":
            case "quantitySpecPro":
                calculation = largeSandwichCalc(name, value, this.state.priceRegNovice, this.state.priceRegSnarf, this.state.priceRegPro, this.state.priceSpecSnarf, this.state.priceSpecPro);
                break
            case "quantityCobb":
            case "quantityGreek":
            case "quantitySnarf":
            case "quantityTossed":
                calculation = saladCalc(name, value, this.state.priceCobb, this.state.priceGreek, this.state.priceSnarf, this.state.priceTossed);
                break
            case "quantityMacaroni":
            case "quantityPotato":
            case "quantityColeslaw":
            case "quantityPickles":
            case "quantityChips":
                calculation = sideCalc(name, value, this.state.priceMacaroni, this.state.pricePotato, this.state.priceColeslaw, this.state.pricePickles, this.state.priceChips);
                break
            case "quantityBottled":
            case "quantityIzze":
            case "quantityArizona":
            case "quantityGatorade":
            case "quantitySnapple":
            case "quantityStewart":
            case "quantityCan":
                calculation = drinkCalc(name, value, this.state.priceBottled, this.state.priceIzze, this.state.priceArizona, this.state.priceGatorade, this.state.priceSnapple, this.state.priceStewart, this.state.priceCan);
                break
            case "quantityCookie":
            case "quantityBrownie":
                calculation = dessertCalc(name, value, this.state.priceCookie, this.state.priceBrownie);
                break
            case "quantityArtichoke":
            case "quantityBacon":
            case "quantityPortobello":
            case "quantityAvocado":
            case "quantityMeat":
            case "quantityGFBread":
                calculation = extraCalc(name, value, this.state.priceArtichoke, this.state.priceBacon, this.state.pricePortobello, this.state.priceAvocado, this.state.priceMeat, this.state.priceGFBread);
                break
            default:
                console.log("Uh oh! Something's not quite right!");
        }
        let stateName = calculation[0];
        let total = calculation[1]
        this.setState({
            [stateName]: total
        }, () => {
            let name = stateName
            switch (name) {
                case "totalPlatter":
                case "totalGlutenFree":
                case "totalBrownBag":
                case "totalBoxLunch":
                    calculation = itemsTotal(this.state.totalPlatter, this.state.totalGlutenFree, this.state.totalBrownBag, this.state.totalBoxLunch)
                    break
                case "totalRegNovice":
                case "totalRegSnarf":
                case "totalRegPro":
                case "totalSpecSnarf":
                case "totalSpecPro":
                    calculation = largeSandwichTotal(this.state.totalRegNovice, this.state.totalRegSnarf, this.state.totalRegPro, this.state.totalSpecSnarf, this.state.totalSpecPro);
                    break
                case "totalCobb":
                case "totalGreek":
                case "totalSnarf":
                case "totalTossed":
                    calculation = saladTotal(this.state.totalCobb, this.state.totalGreek, this.state.totalSnarf, this.state.totalTossed)
                    break
                case "totalMacaroni":
                case "totalPotato":
                case "totalColeslaw":
                case "totalPickle":
                case "totalChip":
                    calculation = sideTotal(this.state.totalMacaroni, this.state.totalPotato, this.state.totalColeslaw, this.state.totalPickle, this.state.totalChip)
                    break
                case "totalBottled":
                case "totalIzze":
                case "totalArizona":
                case "totalGatorade":
                case "totalSnapple":
                case "totalStewart":
                case "totalCan":
                    calculation = drinkTotal(this.state.totalBottled, this.state.totalIzze, this.state.totalArizona, this.state.totalGatorade, this.state.totalSnapple, this.state.totalStewart, this.state.totalCan)
                    break
                case "totalCookie":
                case "totalBrownie":
                    calculation = dessertTotal(this.state.totalCookie, this.state.totalBrownie)
                    break
                case "totalArtichoke":
                case "totalBacon":
                case "totalPortobello":
                case "totalAvocado":
                case "totalMeat":
                case "totalGFBread":
                    calculation = extraTotal(this.state.totalArtichoke, this.state.totalBacon, this.state.totalPortobello, this.state.totalAvocado, this.state.totalMeat, this.state.totalGFBread)
                    break
                default:
                    console.log("Oops something isnt't right!")
            }
            stateName = calculation[0]
            total = calculation[1]
            this.setState({
                [stateName]: total
            }, () => {
                let subtotal = parseFloat(this.state.itemsTotal) + parseFloat(this.state.largeSandwichTotal) + parseFloat(this.state.saladTotal) + parseFloat(this.state.sidesTotal) + parseFloat(this.state.drinkTotal) + parseFloat(this.state.dessertTotal) + parseFloat(this.state.extraTotal);
                let gratuity = parseFloat(subtotal) * 0.1;
                let orderTotal = parseFloat(subtotal) + parseFloat(gratuity) + parseFloat(this.state.delivery) + parseFloat(this.state.salesTax) + parseFloat(this.state.adjustment);
                let itemsQT = itemsQuantityTotal(this.state.quantityPlatter, this.state.quantityGlutenFree, this.state.quantityBrownBag, this.state.quantityBoxLunch);
                let largeSandwichQT = largSandwichQuantityTotal(this.state.quantityRegNovice, this.state.quantityRegSnarf, this.state.quantityRegPro, this.state.quantitySpecSnarf, this.state.quantitySpecPro);
                let saladQT = saladQuantityTotal(this.state.quantityCobb, this.state.quantityGreek, this.state.quantitySnarf, this.state.quantityTossed);
                let sidesQT = sidesQuantityTotal(this.state.quantityMacaroni, this.state.quantityPotato, this.state.quantityColeslaw, this.state.quantityPickles, this.state.quantityChips);
                let drinksQT = drinksQuantityTotal(this.state.quantityBottled, this.state.quantityIzze, this.state.quantityArizona, this.state.quantityGatorade, this.state.quantitySnapple, this.state.quantityStewart, this.state.quantityCan);
                let dessertQT = dessertQuantityTotal(this.state.quantityCookie, this.state.quantityBrownie);
                let totalNumberofItems = parseFloat(itemsQT) + parseFloat(largeSandwichQT) + parseFloat(saladQT) + parseFloat(sidesQT) + parseFloat(drinksQT) + parseFloat(dessertQT);
                this.setState({
                    subtotal: subtotal.toFixed(2),
                    gratuity: gratuity.toFixed(2),
                    total: orderTotal.toFixed(2),
                    numberofItems: totalNumberofItems
                })
            })
        })
    }

    // calculate order Total
    orderTotal = event => {
        event.preventDefault()
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        }, () => {
            let total = parseFloat(this.state.subtotal) + parseFloat(this.state.gratuity) + parseFloat(this.state.delivery) + parseFloat(this.state.salesTax) + parseFloat(this.state.adjustment);
            this.setState({ total: total.toFixed(2) });
        })
    }

    // Collpase list function
    collapseList = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: !this.state[name]
        })
    }

    // Close and clear form
    closeAndClear = () => {
        this.setState({
            newOrderDate: "",
            newOrderNumber: "",
            quantityPlatter: 0,
            quantityGlutenFree: 0,
            quantityBrownBag: 0,
            quantityBoxLunch: 0,
            quantityRegNovice: 0,
            quantityRegSnarf: 0,
            quantityRegPro: 0,
            quantitySpecSnarf: 0,
            quantitySpecPro: 0,
            totalPlatter: "0.00",
            totalGlutenFree: "0.00",
            totalBrownBag: "0.00",
            totalBoxLunch: "0.00",
            totalRegNovice: "0.00",
            totalRegSnarf: "0.00",
            totalRegPro: "0.00",
            totalSpecSnarf: "0.00",
            totalSpecPro: "0.00",
            itemsTotal: 0,
            largeSandwichTotal: 0,
            quantityCobb: 0,
            quantityGreek: 0,
            quantitySnarf: 0,
            quantityTossed: 0,
            totalCobb: "0.00",
            totalGreek: "0.00",
            totalSnarf: "0.00",
            totalTossed: "0.00",
            saladTotal: 0,
            quantityMacaroni: 0,
            quantityPotato: 0,
            quantityColeslaw: 0,
            quantityPickles: 0,
            quantityChips: 0,
            totalMacaroni: "0.00",
            totalPotato: "0.00",
            totalColeslaw: "0.00",
            totalPickle: "0.00",
            totalChip: "0.00",
            sidesTotal: 0,
            quantityBottled: 0,
            quantityIzze: 0,
            quantityArizona: 0,
            quantityGatorade: 0,
            quantitySnapple: 0,
            quantityStewart: 0,
            quantityCan: 0,
            totalBottled: "0.00",
            totalIzze: "0.00",
            totalArizona: "0.00",
            totalGatorade: "0.00",
            totalSnapple: "0.00",
            totalStewart: "0.00",
            totalCan: "0.00",
            drinkTotal: 0,
            quantityCookie: 0,
            quantityBrownie: 0,
            totalCookie: "0.00",
            totalBrownie: "0.00",
            dessertTotal: 0,
            quantityArtichoke: 0,
            quantityBacon: 0,
            quantityPortobello: 0,
            quantityAvocado: 0,
            quantityMeat: 0,
            quantityGFBread: 0,
            totalArtichoke: "0.00",
            totalBacon: "0.00",
            totalPortobello: "0.00",
            totalAvocado: "0.00",
            totalMeat: "0.00",
            totalGFBread: "0.00",
            extraTotal: 0,
            subtotal: "0.00",
            gratuity: "0.00",
            delivery: "0.00",
            salesTax: "0.00",
            adjustment: "0.00",
            total: "0.00",
            notes: ""
        }, () => {
            this.setState({ open: false })
        })
    }

    // Submit new Order
    addOrder = () => {
        if (this.state.newOrderNumber === "") {
            alert("Please enter an order number.")
            return
        }
        let orderInfo = {
            date: this.state.newOrderDate,
            orderNumber: this.state.newOrderNumber.toUpperCase(),
            platter: this.state.quantityPlatter,
            glutenFree: this.state.quantityGlutenFree,
            brownBag: this.state.quantityBrownBag,
            boxLunch: this.state.quantityBoxLunch,
            regNovice: this.state.quantityRegNovice,
            regSnarf: this.state.quantityRegSnarf,
            regPro: this.state.quantityRegPro,
            specSnarf: this.state.quantitySpecSnarf,
            specPro: this.state.quantitySpecPro,
            cobb: this.state.quantityCobb,
            greek: this.state.quantityGreek,
            snarf: this.state.quantitySnarf,
            tossed: this.state.quantityTossed,
            macaroni: this.state.quantityMacaroni,
            potato: this.state.quantityPotato,
            coleslaw: this.state.quantityColeslaw,
            pickles: this.state.quantityPickles,
            chips: this.state.quantityChips,
            bottled: this.state.quantityBottled,
            izze: this.state.quantityIzze,
            arizona: this.state.quantityArizona,
            gatorade: this.state.quantityGatorade,
            stewarts: this.state.quantityStewart,
            snapple: this.state.quantitySnapple,
            can: this.state.quantityCan,
            cookies: this.state.quantityCookie,
            brownies: this.state.quantityBrownie,
            numofItems: this.state.numberofItems,
            artichoke: this.state.quantityArtichoke,
            bacon: this.state.quantityBacon,
            portobello: this.state.quantityPortobello,
            avocado: this.state.quantityAvocado,
            meat: this.state.quantityMeat,
            gfBread: this.state.quantityGFBread,
            delivery: this.state.delivery,
            salesTax: this.state.salesTax,
            adjustment: this.state.adjustment,
            total: this.state.total,
            notes: this.state.notes,
            CustomerId: this.state.customerId
        }
        API.add(orderInfo).then(() => {
            window.location.reload();
        })
    }

    // Display order
    displayOrder = event => {
        let orderInfo = this.state.orderList[event.target.id]
        // console.log(orderInfo);
        this.setState({
            arrayPosition: event.target.id,
            orderID: orderInfo.id,
            modalOrderNumber: orderInfo.orderNumber,
            modalOrderDate: orderInfo.date,
            modalNumberOfItems: orderInfo.numofItems,
            modalOrderTotal: orderInfo.total,
            modalOrderNotes: orderInfo.notes,
            modalOrderItemsArray: orderFilter(orderInfo)
        }, () => {
            this.setState({
                modalOrderDetailsShow: true
            })
        })
    }

    // Edit an order
    editOrder = () => {
        let orderInfo = this.state.orderList[this.state.arrayPosition]
        // set quantaties of each item as well as the date and order number
        this.setState({
            newOrderDate: orderInfo.date,
            newOrderNumber: orderInfo.orderNumber,
            quantityPlatter: orderInfo.platter,
            quantityGlutenFree: orderInfo.glutenFree,
            quantityBrownBag: orderInfo.brownBag,
            quantityBoxLunch: orderInfo.boxLunch,
            quantityRegNovice: orderInfo.regNovice,
            quantityRegSnarf: orderInfo.regSnarf,
            quantityRegPro: orderInfo.regPro,
            quantitySpecSnarf: orderInfo.specSnarf,
            quantitySpecPro: orderInfo.specPro,
            quantityCobb: orderInfo.cobb,
            quantityGreek: orderInfo.greek,
            quantitySnarf: orderInfo.snarf,
            quantityTossed: orderInfo.tossed,
            quantityMacaroni: orderInfo.macaroni,
            quantityPotato: orderInfo.potato,
            quantityColeslaw: orderInfo.coleslaw,
            quantityPickles: orderInfo.pickles,
            quantityChips: orderInfo.chips,
            quantityBottled: orderInfo.bottled,
            quantityIzze: orderInfo.izze,
            quantityArizona: orderInfo.arizona,
            quantityGatorade: orderInfo.gatorade,
            quantitySnapple: orderInfo.snapple,
            quantityStewart: orderInfo.stewarts,
            quantityCan: orderInfo.can,
            quantityCookie: orderInfo.cookies,
            quantityBrownie: orderInfo.brownies,
            quantityArtichoke: orderInfo.artichoke,
            quantityBacon: orderInfo.bacon,
            quantityPortobello: orderInfo.portobello,
            quantityAvocado: orderInfo.avocado,
            quantityMeat: orderInfo.meat,
            quantityGFBread: orderInfo.gfBread,
            delivery: orderInfo.delivery,
            salesTax: orderInfo.salesTax,
            adjustment: orderInfo.adjustment,
            total: orderInfo.total,
            notes: orderInfo.notes
        }, () => {
            // calculate each item
            let platter = parseFloat(this.state.quantityPlatter) * parseFloat(this.state.pricePlatter);
            let glutenFree = parseFloat(this.state.quantityGlutenFree) * parseFloat(this.state.priceGlutenFree);
            let brownBag = parseFloat(this.state.quantityBrownBag) * parseFloat(this.state.priceBrownBag);
            let boxLunch = parseFloat(this.state.quantityBoxLunch) * parseFloat(this.state.priceBoxLunch);
            let regNovice = parseFloat(this.state.quantityRegNovice) * parseFloat(this.state.priceRegNovice);
            let regSnarf = parseFloat(this.state.quantityRegSnarf) * parseFloat(this.state.priceRegSnarf);
            let regPro = parseFloat(this.state.quantityRegPro) * parseFloat(this.state.priceRegPro);
            let specSnarf = parseFloat(this.state.quantitySpecSnarf) * parseFloat(this.state.priceSpecPro);
            let specPro = parseFloat(this.state.quantitySpecPro) * parseFloat(this.state.priceSpecPro);
            let cobb = parseFloat(this.state.quantityCobb) * parseFloat(this.state.priceCobb);
            let greek = parseFloat(this.state.quantityGreek) * parseFloat(this.state.priceGreek);
            let snarf = parseFloat(this.state.quantitySnarf) * parseFloat(this.state.priceSnarf);
            let tossed = parseFloat(this.state.quantityTossed) * parseFloat(this.state.priceTossed);
            let macaroni = parseFloat(this.state.quantityMacaroni) * parseFloat(this.state.priceMacaroni);
            let potato = parseFloat(this.state.quantityPotato) * parseFloat(this.state.pricePotato);
            let coleslaw = parseFloat(this.state.quantityColeslaw) * parseFloat(this.state.priceColeslaw);
            let pickles = parseFloat(this.state.quantityPickles) * parseFloat(this.state.pricePickles);
            let chips = parseFloat(this.state.quantityChips) * parseFloat(this.state.priceChips);
            let bottled = parseFloat(this.state.quantityBottled) * parseFloat(this.state.priceBottled);
            let izzes = parseFloat(this.state.quantityIzze) * parseFloat(this.state.priceIzze);
            let arizona = parseFloat(this.state.quantityArizona) * parseFloat(this.state.priceArizona);
            let gatorade = parseFloat(this.state.quantityGatorade) * parseFloat(this.state.priceGatorade);
            let snapple = parseFloat(this.state.quantitySnapple) * parseFloat(this.state.priceSnapple);
            let stewarts = parseFloat(this.state.quantityStewart) * parseFloat(this.state.priceStewart);
            let can = parseFloat(this.state.quantityCan) * parseFloat(this.state.priceCan);
            let cookie = parseFloat(this.state.quantityCookie) * parseFloat(this.state.priceCookie);
            let brownie = parseFloat(this.state.quantityBrownie) * parseFloat(this.state.priceBrownie);
            let artichoke = parseFloat(this.state.quantityArtichoke) * parseFloat(this.state.priceArtichoke);
            let bacon = parseFloat(this.state.quantityBacon) * parseFloat(this.state.priceBacon);
            let portobello = parseFloat(this.state.quantityPortobello) * parseFloat(this.state.pricePortobello);
            let avocado = parseFloat(this.state.quantityAvocado) * parseFloat(this.state.priceAvocado);
            let meat = parseFloat(this.state.quantityMeat) * parseFloat(this.state.priceMeat);
            let gfBread = parseFloat(this.state.quantityGFBread) * parseFloat(this.state.priceGFBread);
            this.setState({
                totalPlatter: platter.toFixed(2),
                totalGlutenFree: glutenFree.toFixed(2),
                totalBrownBag: brownBag.toFixed(2),
                totalBoxLunch: boxLunch.toFixed(2),
                totalRegNovice: regNovice.toFixed(2),
                totalRegSnarf: regSnarf.toFixed(2),
                totalRegPro: regPro.toFixed(2),
                totalSpecSnarf: specSnarf.toFixed(2),
                totalSpecPro: specPro.toFixed(2),
                totalCobb: cobb.toFixed(2),
                totalGreek: greek.toFixed(2),
                totalSnarf: snarf.toFixed(2),
                totalTossed: tossed.toFixed(2),
                totalMacaroni: macaroni.toFixed(2),
                totalPotato: potato.toFixed(2),
                totalColeslaw: coleslaw.toFixed(2),
                totalPickle: pickles.toFixed(2),
                totalChip: chips.toFixed(2),
                totalBottled: bottled.toFixed(2),
                totalIzze: izzes.toFixed(2),
                totalArizona: arizona.toFixed(2),
                totalGatorade: gatorade.toFixed(2),
                totalSnapple: snapple.toFixed(2),
                totalStewart: stewarts.toFixed(2),
                totalCan: can.toFixed(2),
                totalCookie: cookie.toFixed(2),
                totalBrownie: brownie.toFixed(2),
                totalArtichoke: artichoke.toFixed(2),
                totalBacon: bacon.toFixed(2),
                totalPortobello: portobello.toFixed(2),
                totalAvocado: avocado.toFixed(2),
                totalMeat: meat.toFixed(2),
                totalGFBread: gfBread.toFixed(2),
            }, () => {
                // calculate the totals for each group
                let itemsTotal = parseFloat(this.state.totalPlatter) + parseFloat(this.state.totalGlutenFree) + parseFloat(this.state.totalBrownBag) + parseFloat(this.state.totalBoxLunch);
                let largeSandwichTotal = parseFloat(this.state.totalRegNovice) + parseFloat(this.state.totalRegSnarf) + parseFloat(this.state.totalRegPro) + parseFloat(this.state.totalSpecSnarf) + parseFloat(this.state.totalSpecPro);
                let saladTotal = parseFloat(this.state.totalCobb) + parseFloat(this.state.totalGreek) + parseFloat(this.state.totalSnarf) + parseFloat(this.state.totalTossed);
                let sidesTotal = parseFloat(this.state.totalMacaroni) + parseFloat(this.state.totalPotato) + parseFloat(this.state.totalColeslaw) + parseFloat(this.state.totalPickle) + parseFloat(this.state.totalChip);
                let drinkTotal = parseFloat(this.state.totalBottled) + parseFloat(this.state.totalIzze) + parseFloat(this.state.totalArizona) + parseFloat(this.state.totalGatorade) + parseFloat(this.state.totalSnapple) + parseFloat(this.state.totalStewart) + parseFloat(this.state.totalCan);
                let dessertTotal = parseFloat(this.state.totalCookie) + parseFloat(this.state.totalBrownie);
                let extraTotal = parseFloat(this.state.totalArtichoke) + parseFloat(this.state.totalBacon) + parseFloat(this.state.totalPortobello) + parseFloat(this.state.totalAvocado) + parseFloat(this.state.totalMeat) + parseFloat(this.state.totalGFBread);
                this.setState({
                    itemsTotal: itemsTotal.toFixed(2),
                    largeSandwichTotal: largeSandwichTotal.toFixed(2),
                    saladTotal: saladTotal.toFixed(2),
                    sidesTotal: sidesTotal.toFixed(2),
                    drinkTotal: drinkTotal.toFixed(2),
                    dessertTotal: dessertTotal.toFixed(2),
                    extraTotal: extraTotal.toFixed(2)
                }, () => {
                    // caluclate subtotal and gratuity
                    let subtotal = parseFloat(this.state.itemsTotal) + parseFloat(this.state.largeSandwichTotal) + parseFloat(this.state.saladTotal) + parseFloat(this.state.sidesTotal) + parseFloat(this.state.drinkTotal) + parseFloat(this.state.dessertTotal) + parseFloat(this.state.extraTotal);
                    let gratuity = parseFloat(subtotal) * 0.1;
                    let itemsQT = itemsQuantityTotal(this.state.quantityPlatter, this.state.quantityGlutenFree, this.state.quantityBrownBag, this.state.quantityBoxLunch);
                    let largeSandwichQT = largSandwichQuantityTotal(this.state.quantityRegNovice, this.state.quantityRegSnarf, this.state.quantityRegPro, this.state.quantitySpecSnarf, this.state.quantitySpecPro);
                    let saladQT = saladQuantityTotal(this.state.quantityCobb, this.state.quantityGreek, this.state.quantitySnarf, this.state.quantityTossed);
                    let sidesQT = sidesQuantityTotal(this.state.quantityMacaroni, this.state.quantityPotato, this.state.quantityColeslaw, this.state.quantityPickles, this.state.quantityChips);
                    let drinksQT = drinksQuantityTotal(this.state.quantityBottled, this.state.quantityIzze, this.state.quantityArizona, this.state.quantityGatorade, this.state.quantitySnapple, this.state.quantityStewart, this.state.quantityCan);
                    let dessertQT = dessertQuantityTotal(this.state.quantityCookie, this.state.quantityBrownie);
                    let totalNumberofItems = parseFloat(itemsQT) + parseFloat(largeSandwichQT) + parseFloat(saladQT) + parseFloat(sidesQT) + parseFloat(drinksQT) + parseFloat(dessertQT);
                    this.setState({
                        subtotal: subtotal.toFixed(2),
                        gratuity: gratuity.toFixed(2),
                        numberofItems: totalNumberofItems
                    }, () => {
                        // show modals
                        this.setState({
                            modalOrderDetailsShow: false,
                            modalOrderEditShow: true
                        })
                    })
                })
            })
        })
    }

    // Submit an edit
    submitEdit = () => {
        if (this.state.newOrderNumber === "") {
            alert("Please enter an order number.")
            return
        }
        let newInformation = {
            id: this.state.orderID,
            date: this.state.newOrderDate,
            orderNumber: this.state.newOrderNumber.toUpperCase(),
            platter: this.state.quantityPlatter,
            glutenFree: this.state.quantityGlutenFree,
            brownBag: this.state.quantityBrownBag,
            boxLunch: this.state.quantityBoxLunch,
            regNovice: this.state.quantityRegNovice,
            regSnarf: this.state.quantityRegSnarf,
            regPro: this.state.quantityRegPro,
            specSnarf: this.state.quantitySpecSnarf,
            specPro: this.state.quantitySpecPro,
            cobb: this.state.quantityCobb,
            greek: this.state.quantityGreek,
            snarf: this.state.quantitySnarf,
            tossed: this.state.quantityTossed,
            macaroni: this.state.quantityMacaroni,
            potato: this.state.quantityPotato,
            coleslaw: this.state.quantityColeslaw,
            pickles: this.state.quantityPickles,
            chips: this.state.quantityChips,
            bottled: this.state.quantityBottled,
            izze: this.state.quantityIzze,
            arizona: this.state.quantityArizona,
            gatorade: this.state.quantityGatorade,
            stewarts: this.state.quantityStewart,
            snapple: this.state.quantitySnapple,
            can: this.state.quantityCan,
            cookies: this.state.quantityCookie,
            brownies: this.state.quantityBrownie,
            numofItems: this.state.numberofItems,
            artichoke: this.state.quantityArtichoke,
            bacon: this.state.quantityBacon,
            portobello: this.state.quantityPortobello,
            avocado: this.state.quantityAvocado,
            meat: this.state.quantityMeat,
            gfBread: this.state.quantityGFBread,
            delivery: this.state.delivery,
            salesTax: this.state.salesTax,
            adjustment: this.state.adjustment,
            total: this.state.total,
            notes: this.state.notes,
        }
        API.edit(newInformation).then(() => {
            this.handleModalCloseEdit();
            this.loadInfo();
        })
    }

    handleModalCloseDetails = () => {
        this.setState({ modalOrderDetailsShow: false })
    }

    handleModalCloseEdit = () => {
        this.setState({
            modalOrderEditShow: false
        }, () => {
            this.closeAndClear();
        })
    }

    deleteOrder = event => {
        event.preventDefault()
        API.delete(event.target.id).then(() => {
            this.handleModalCloseDetails();
            this.loadInfo();
        })
    }

    test = event => {
        event.preventDefault()
        if (this.state.newOrderNumber === "") {
            console.log("The order needs an number.")
            return
        }
        console.log("The order will be submitted.")
    }

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container fluid>
                        <a href="/">Back</a>
                        <h1>{this.state.organization}</h1>
                        <Row>
                            <Col md={5}>
                                <h4>Contact: <span>{this.state.contact}</span></h4>
                                <h4>Address: <span>{this.state.address}</span></h4>
                                <h4>Email: <span>{this.state.email}</span></h4>
                                <h4>Phone: <span>{this.state.phone}</span></h4>
                            </Col>
                            <Col md={6}>
                                <h4>Number of Orders: <span>{this.state.orderList.length}</span></h4>
                                <h4>Last Order: <span>{this.state.lastOrder}</span></h4>
                                <h4>Frequently Orders On: <span>{this.state.frequentDay}</span></h4>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <Button className="btn trigger" variant="link" name="open" onClick={this.collapseList}>
                        Input New Order
                    </Button>
                    <Collapse in={this.state.open}>
                        <div>
                            <OrderForm
                                change={this.handleInputChange}
                                calculate={this.calculate}
                                totalCalculation={this.orderTotal}
                                date={this.state.newOrderDate}
                                orderNumber={this.state.newOrderNumber}
                                quantityPlatter={this.state.quantityPlatter}
                                quantityGlutenFree={this.state.quantityGlutenFree}
                                quantityBrownBag={this.state.quantityBrownBag}
                                quantityBoxLunch={this.state.quantityBoxLunch}
                                quantityRegNovice={this.state.quantityRegNovice}
                                quantityRegSnarf={this.state.quantityRegSnarf}
                                quantityRegPro={this.state.quantityRegPro}
                                quantitySpecSnarf={this.state.quantitySpecSnarf}
                                quantitySpecPro={this.state.quantitySpecPro}
                                pricePlatter={this.state.pricePlatter}
                                priceGlutenFree={this.state.priceGlutenFree}
                                priceBrownBag={this.state.priceBrownBag}
                                priceBoxLunch={this.state.priceBoxLunch}
                                priceRegNovice={this.state.priceRegNovice}
                                priceRegSnarf={this.state.priceRegSnarf}
                                priceRegPro={this.state.priceRegPro}
                                priceSpecSnarf={this.state.priceSpecSnarf}
                                priceSpecPro={this.state.priceSpecPro}
                                totalPlatter={this.state.totalPlatter}
                                totalGlutenFree={this.state.totalGlutenFree}
                                totalBrownBag={this.state.totalBrownBag}
                                totalBoxLunch={this.state.totalBoxLunch}
                                totalRegNovice={this.state.totalRegNovice}
                                totalRegSnarf={this.state.totalRegSnarf}
                                totalRegPro={this.state.totalRegPro}
                                totalSpecSnarf={this.state.totalSpecSnarf}
                                totalSpecPro={this.state.totalSpecPro}
                                quantityCobb={this.state.quantityCobb}
                                quantityGreek={this.state.quantityGreek}
                                quantitySnarf={this.state.quantitySnarf}
                                quantityTossed={this.state.quantityTossed}
                                priceCobb={this.state.priceCobb}
                                priceGreek={this.state.priceGreek}
                                priceSnarf={this.state.priceSnarf}
                                priceTossed={this.state.priceTossed}
                                totalCobb={this.state.totalCobb}
                                totalGreek={this.state.totalGreek}
                                totalSnarf={this.state.totalSnarf}
                                totalTossed={this.state.totalTossed}
                                quantityMacaroni={this.state.quantityMacaroni}
                                quantityPotato={this.state.quantityPotato}
                                quantityColeslaw={this.state.quantityColeslaw}
                                quantityPickles={this.state.quantityPickles}
                                quantityChips={this.state.quantityChips}
                                priceMacaroni={this.state.priceMacaroni}
                                pricePotato={this.state.pricePotato}
                                priceColeslaw={this.state.priceColeslaw}
                                pricePickles={this.state.pricePickles}
                                priceChips={this.state.priceChips}
                                totalMacaroni={this.state.totalMacaroni}
                                totalPotato={this.state.totalPotato}
                                totalColeslaw={this.state.totalColeslaw}
                                totalPickle={this.state.totalPickle}
                                totalChip={this.state.totalChip}
                                quantityBottled={this.state.quantityBottled}
                                quantityIzze={this.state.quantityIzze}
                                quantityArizona={this.state.quantityArizona}
                                quantityGatorade={this.state.quantityGatorade}
                                quantitySnapple={this.state.quantitySnapple}
                                quantityStewart={this.state.quantityStewart}
                                quantityCan={this.state.quantityCan}
                                priceBottled={this.state.priceBottled}
                                priceIzze={this.state.priceIzze}
                                priceArizona={this.state.priceArizona}
                                priceGatorade={this.state.priceGatorade}
                                priceSnapple={this.state.priceSnapple}
                                priceStewart={this.state.priceStewart}
                                priceCan={this.state.priceCan}
                                totalBottled={this.state.totalBottled}
                                totalIzze={this.state.totalIzze}
                                totalArizona={this.state.totalArizona}
                                totalGatorade={this.state.totalGatorade}
                                totalSnapple={this.state.totalSnapple}
                                totalStewart={this.state.totalStewart}
                                totalCan={this.state.totalCan}
                                quantityCookie={this.state.quantityCookie}
                                quantityBrownie={this.state.quantityBrownie}
                                priceCookie={this.state.priceCookie}
                                priceBrownie={this.state.priceBrownie}
                                totalCookie={this.state.totalCookie}
                                totalBrownie={this.state.totalBrownie}
                                quantityArtichoke={this.state.quantityArtichoke}
                                quantityBacon={this.state.quantityBacon}
                                quantityPortobello={this.state.quantityPortobello}
                                quantityAvocado={this.state.quantityAvocado}
                                quantityMeat={this.state.quantityMeat}
                                quantityGFBread={this.state.quantityGFBread}
                                priceArtichoke={this.state.priceArtichoke}
                                priceBacon={this.state.priceBacon}
                                pricePortobello={this.state.pricePortobello}
                                priceAvocado={this.state.priceAvocado}
                                priceMeat={this.state.priceMeat}
                                priceGFBread={this.state.priceGFBread}
                                totalArtichoke={this.state.totalArtichoke}
                                totalBacon={this.state.totalBacon}
                                totalPortobello={this.state.totalPortobello}
                                totalAvocado={this.state.totalAvocado}
                                totalMeat={this.state.totalMeat}
                                totalGFBread={this.state.totalGFBread}
                                subtotal={this.state.subtotal}
                                gratuity={this.state.gratuity}
                                delivery={this.state.delivery}
                                salesTax={this.state.salesTax}
                                adjustment={this.state.adjustment}
                                total={this.state.total}
                                notes={this.state.notes}
                                closeForm={this.closeAndClear}
                                submit={this.addOrder}
                            />
                        </div>
                    </Collapse>
                    <Row id="history-row">
                        <h3>Order History</h3>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Order Number</th>
                                    <th>Number of Items</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orderList.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.date}</td>
                                            <td><Button variant="link" className="table-button" id={index} onClick={this.displayOrder}>{info.orderNumber}</Button></td>
                                            <td>{info.numofItems}</td>
                                            <td>{info.total}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
                {/* Modals */}
                <ModalView
                    show={this.state.modalOrderDetailsShow}
                    orderID={this.state.orderID}
                    editOrder={this.editOrder}
                    orderNumber={this.state.modalOrderNumber}
                    close={this.handleModalCloseDetails}
                    date={this.state.modalOrderDate}
                    numberOfItems={this.state.modalNumberOfItems}
                    total={this.state.modalOrderTotal}
                    notes={this.state.modalOrderNotes}
                    orderArray={this.state.modalOrderItemsArray}
                    deleteOrder={this.deleteOrder}
                />
                <ModalEdit
                    show={this.state.modalOrderEditShow}
                    close={this.handleModalCloseEdit}
                    change={this.handleInputChange}
                    calculate={this.calculate}
                    totalCalculation={this.orderTotal}
                    date={this.state.newOrderDate}
                    orderNumber={this.state.newOrderNumber}
                    quantityPlatter={this.state.quantityPlatter}
                    quantityGlutenFree={this.state.quantityGlutenFree}
                    quantityBrownBag={this.state.quantityBrownBag}
                    quantityBoxLunch={this.state.quantityBoxLunch}
                    quantityRegNovice={this.state.quantityRegNovice}
                    quantityRegSnarf={this.state.quantityRegSnarf}
                    quantityRegPro={this.state.quantityRegPro}
                    quantitySpecSnarf={this.state.quantitySpecSnarf}
                    quantitySpecPro={this.state.quantitySpecPro}
                    pricePlatter={this.state.pricePlatter}
                    priceGlutenFree={this.state.priceGlutenFree}
                    priceBrownBag={this.state.priceBrownBag}
                    priceBoxLunch={this.state.priceBoxLunch}
                    priceRegNovice={this.state.priceRegNovice}
                    priceRegSnarf={this.state.priceRegSnarf}
                    priceRegPro={this.state.priceRegPro}
                    priceSpecSnarf={this.state.priceSpecSnarf}
                    priceSpecPro={this.state.priceSpecPro}
                    totalPlatter={this.state.totalPlatter}
                    totalGlutenFree={this.state.totalGlutenFree}
                    totalBrownBag={this.state.totalBrownBag}
                    totalBoxLunch={this.state.totalBoxLunch}
                    totalRegNovice={this.state.totalRegNovice}
                    totalRegSnarf={this.state.totalRegSnarf}
                    totalRegPro={this.state.totalRegPro}
                    totalSpecSnarf={this.state.totalSpecSnarf}
                    totalSpecPro={this.state.totalSpecPro}
                    quantityCobb={this.state.quantityCobb}
                    quantityGreek={this.state.quantityGreek}
                    quantitySnarf={this.state.quantitySnarf}
                    quantityTossed={this.state.quantityTossed}
                    priceCobb={this.state.priceCobb}
                    priceGreek={this.state.priceGreek}
                    priceSnarf={this.state.priceSnarf}
                    priceTossed={this.state.priceTossed}
                    totalCobb={this.state.totalCobb}
                    totalGreek={this.state.totalGreek}
                    totalSnarf={this.state.totalSnarf}
                    totalTossed={this.state.totalTossed}
                    quantityMacaroni={this.state.quantityMacaroni}
                    quantityPotato={this.state.quantityPotato}
                    quantityColeslaw={this.state.quantityColeslaw}
                    quantityPickles={this.state.quantityPickles}
                    quantityChips={this.state.quantityChips}
                    priceMacaroni={this.state.priceMacaroni}
                    pricePotato={this.state.pricePotato}
                    priceColeslaw={this.state.priceColeslaw}
                    pricePickles={this.state.pricePickles}
                    priceChips={this.state.priceChips}
                    totalMacaroni={this.state.totalMacaroni}
                    totalPotato={this.state.totalPotato}
                    totalColeslaw={this.state.totalColeslaw}
                    totalPickle={this.state.totalPickle}
                    totalChip={this.state.totalChip}
                    quantityBottled={this.state.quantityBottled}
                    quantityIzze={this.state.quantityIzze}
                    quantityArizona={this.state.quantityArizona}
                    quantityGatorade={this.state.quantityGatorade}
                    quantitySnapple={this.state.quantitySnapple}
                    quantityStewart={this.state.quantityStewart}
                    quantityCan={this.state.quantityCan}
                    priceBottled={this.state.priceBottled}
                    priceIzze={this.state.priceIzze}
                    priceArizona={this.state.priceArizona}
                    priceGatorade={this.state.priceGatorade}
                    priceSnapple={this.state.priceSnapple}
                    priceStewart={this.state.priceStewart}
                    priceCan={this.state.priceCan}
                    totalBottled={this.state.totalBottled}
                    totalIzze={this.state.totalIzze}
                    totalArizona={this.state.totalArizona}
                    totalGatorade={this.state.totalGatorade}
                    totalSnapple={this.state.totalSnapple}
                    totalStewart={this.state.totalStewart}
                    totalCan={this.state.totalCan}
                    quantityCookie={this.state.quantityCookie}
                    quantityBrownie={this.state.quantityBrownie}
                    priceCookie={this.state.priceCookie}
                    priceBrownie={this.state.priceBrownie}
                    totalCookie={this.state.totalCookie}
                    totalBrownie={this.state.totalBrownie}
                    quantityArtichoke={this.state.quantityArtichoke}
                    quantityBacon={this.state.quantityBacon}
                    quantityPortobello={this.state.quantityPortobello}
                    quantityAvocado={this.state.quantityAvocado}
                    quantityMeat={this.state.quantityMeat}
                    quantityGFBread={this.state.quantityGFBread}
                    priceArtichoke={this.state.priceArtichoke}
                    priceBacon={this.state.priceBacon}
                    pricePortobello={this.state.pricePortobello}
                    priceAvocado={this.state.priceAvocado}
                    priceMeat={this.state.priceMeat}
                    priceGFBread={this.state.priceGFBread}
                    totalArtichoke={this.state.totalArtichoke}
                    totalBacon={this.state.totalBacon}
                    totalPortobello={this.state.totalPortobello}
                    totalAvocado={this.state.totalAvocado}
                    totalMeat={this.state.totalMeat}
                    totalGFBread={this.state.totalGFBread}
                    subtotal={this.state.subtotal}
                    gratuity={this.state.gratuity}
                    delivery={this.state.delivery}
                    salesTax={this.state.salesTax}
                    adjustment={this.state.adjustment}
                    total={this.state.total}
                    notes={this.state.notes}
                    submitEdit={this.submitEdit}
                />
            </>
        );
    };
}

export default Orders