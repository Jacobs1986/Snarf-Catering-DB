import React, { Component } from "react";

// Bootstrap
import { Form, Col, Container, Button, Collapse } from 'react-bootstrap'

// API route
import API from "../../../../utils/API.orders";

let url = window.location.search;
let customerId = url.split("=")[1];

class OrderForm extends Component {
    state = {
        customerId: customerId,
        newOrderDate: "",
        newOrderNum: "",
        newOrderType: "Platter",
        orderSubTotal: 0,
        subTotalDisplay: 0,
        orderTotal: "0.00",
        orderTotalDisplay: 0,
        numofPlat: 0,
        numofBox: 0,
        numofChips: 0,
        numofSalads: 0,
        numofPick: 0,
        numofCook: 0,
        costofPlat: 0,
        costofBox: 0,
        costofChips: 0,
        costofSalads: 0,
        costofPick: 0,
        costofCook: 0,
        totalCostofPlat: 0,
        totalCostofBox: 0,
        totalCostofChips: 0,
        totalCostofSalads: 0,
        totalCostofPick: 0,
        totalCostofCook: 0,
        deliveryFee: 0,
        gratuity: 0,
        salesTax: 0,
        adjustment: 0,
        orderNotes: "",
        open: false
    }

    // Functions
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        return [value, name];
    }

    itemCalc = event => {
        event.preventDefault();
        let data = this.handleInputChange(event);
        let name = data[1];
        let value = data[0];
        let total;
        let subtotal;
        let orderTotal;
        switch (name) {
            // Platter
            case "numofPlat":
                let platNum = value;
                let platCost = this.state.costofPlat;
                total = parseFloat(platNum) * parseFloat(platCost);
                subtotal = this.subtotalCalc(total, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofPick, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofPlat: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            case "costofPlat":
                let costPlat = value;
                let numPlat = this.state.numofPlat;
                total = parseFloat(costPlat) * parseFloat(numPlat)
                subtotal = this.subtotalCalc(total, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofPick, this.state.totalCostofCook);
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofPlat: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            // Box
            case "numofBox":
                let boxNum = value;
                let boxCost = this.state.costofBox;
                total = parseFloat(boxNum) * parseFloat(boxCost);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofPick, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofBox: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            case "costofBox":
                let costBox = value;
                let numBox = this.state.numofBox;
                total = parseFloat(costBox) * parseFloat(numBox);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofPick, this.state.totalCostofCook);
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofBox: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            // Chips
            case "numofChips":
                let numChips = value;
                let costChips = this.state.costofChips;
                total = parseFloat(numChips) * parseFloat(costChips);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofSalads, this.state.totalCostofPick, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofChips: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            case "costofChips":
                let chipCost = value;
                let chipNum = this.state.numofChips;
                total = parseFloat(chipCost) * parseFloat(chipNum);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofSalads, this.state.totalCostofPick, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofChips: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            // Salad
            case "numofSalads":
                let numSalads = value;
                let costSalads = this.state.costofSalads;
                total = parseFloat(numSalads) * parseFloat(costSalads);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofPick, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofSalads: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            case "costofSalads":
                let saladCost = value;
                let saladNum = this.state.numofSalads;
                total = parseFloat(saladCost) * parseFloat(saladNum);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofPick, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofSalads: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            // Pickles
            case "numofPick":
                let pickNum = value;
                let pickCost = this.state.costofPick;
                total = parseFloat(pickNum) * parseFloat(pickCost);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofPick: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            case "costofPick":
                let costPick = value;
                let numPick = this.state.numofPick;
                total = parseFloat(costPick) * parseFloat(numPick);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofCook)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofPick: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            case "numofCook":
                let cookNum = value;
                let cookCost = this.state.costofCook;
                total = parseFloat(cookNum) * parseFloat(cookCost);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofPick)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofCook: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            case "costofCook":
                let costCook = value;
                let numCook = this.state.numofCook;
                total = parseFloat(costCook) * parseFloat(numCook);
                subtotal = this.subtotalCalc(total, this.state.totalCostofPlat, this.state.totalCostofBox, this.state.totalCostofChips, this.state.totalCostofSalads, this.state.totalCostofPick)
                orderTotal = this.totalCalc(subtotal, this.state.deliveryFee, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                this.setState({
                    totalCostofCook: total.toFixed(2),
                    subTotalDisplay: subtotal,
                    orderTotalDisplay: orderTotal
                })
                break
            default:
        }
    }

    orderTotal = event => {
        event.preventDefault();
        let data = this.handleInputChange(event);
        let name = data[1];
        let value = data[0]
        switch (name) {
            case "deliveryFee":
                this.setState({
                    orderTotalDisplay: this.totalCalc("", value, this.state.gratuity, this.state.salesTax, this.state.adjustment)
                })
                break
            case "gratuity":
                this.setState({ orderTotalDisplay: this.totalCalc("", value, this.state.deliveryFee, this.state.salesTax, this.state.adjustment) })
                break
            case "salesTax":
                this.setState({ orderTotalDisplay: this.totalCalc("", value, this.state.deliveryFee, this.state.gratuity, this.state.adjustment) })
                break
            case "adjustment":
                this.setState({ orderTotalDisplay: this.totalCalc("", value, this.state.deliveryFee, this.state.gratuity, this.state.salesTax) })
                break
            default:
        }
    }

    subtotalCalc = (input1, input2, input3, input4, input5, input6) => {
        let subtotal = parseFloat(input1) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4) + parseFloat(input5) + parseFloat(input6);
        this.setState({ orderSubTotal: subtotal.toFixed(2) });
        return subtotal.toFixed(2)
    }

    totalCalc = (input1, input2, input3, input4, input5) => {
        let subtotal;
        if (input1 !== "") {
            subtotal = input1;
        } else {
            subtotal = this.state.orderSubTotal
        }
        let total = parseFloat(subtotal) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4) + parseFloat(input5);
        this.setState({ orderTotal: total.toFixed(2) });
        return total.toFixed(2);
    }

    collapseList = (event) => {
        let name = event.target.name;
        console.log(name);
        this.setState({
            [name]: !this.state[name]
        })
    }

    submitOrder = event => {
        event.preventDefault();
        var totalItems;
        if (this.state.newOrderType === "Platter") {
            totalItems = this.state.numofPlat
        } else if (this.state.newOrderType === "Box Lunch") {
            totalItems = this.state.numofBox
        } else {
            totalItems = Number(this.state.numofPlat) + Number(this.state.numofBox)
        }
        console.log(totalItems);
        let newOrder = {
            date: this.state.newOrderDate,
            orderNumber: this.state.newOrderNum.toUpperCase(),
            orderType: this.state.newOrderType,
            numofItems: totalItems,
            numofChips: this.state.numofChips,
            totalChips: this.state.totalCostofChips,
            numofSalad: this.state.numofSalads,
            totalSalad: this.state.totalCostofSalads,
            numofPick: this.state.numofPick,
            totalPick: this.state.totalCostofPick,
            numofCook: this.state.numofCook,
            totalCook: this.state.totalCostofCook,
            total: this.state.orderTotal,
            notes: this.state.orderNotes,
            CustomerId: this.state.customerId
        }
        console.log(newOrder);
        API.add(newOrder).then((result) => {
            window.location.reload();
        })
    }

    render() {
        return (
            <>
                <Container>
                    <Button className="btn trigger" variant="link" name="open" onClick={this.collapseList}>
                        Input New Order
                    </Button>
                    <Collapse in={this.state.open}>
                        <div>
                            {/* Date, Order Number and Order Type */}
                            <Form>
                                <Form.Row>
                                    {/* New Order date */}
                                    <Col sm={2}>
                                        <Form.Group>
                                            <Form.Label>
                                                Date:
                                        </Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="newOrderDate"
                                                value={this.state.newOrderDate}
                                                onChange={this.handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    {/* New Order Number */}
                                    <Col sm={3}>
                                        <Form.Group>
                                            <Form.Label>
                                                Order/Recipet Number:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="newOrderNum"
                                                value={this.state.newOrderNum.toUpperCase()}
                                                onChange={this.handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    {/* New Order Type */}
                                    <Col sm={3}>
                                        <Form.Label>
                                            Type of Order:
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="newOrderType"
                                            value={this.state.newOrderType}
                                            onChange={this.handleInputChange}
                                        >
                                            <option value="Platter">Platter</option>
                                            <option value="Box Lunch">Box Lunch</option>
                                            <option value="Combo">Combo</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <h5>Items</h5>
                            {/* Platters */}
                            <Form inline>
                                <Form.Group>
                                    <Form.Label id="num-plat-label">
                                        Number of Platters:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="number"
                                        name="numofPlat"
                                        value={this.state.numofPlat}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Cost per Platter:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="costofPlat"
                                        placeholder="0.00"
                                        value={this.state.costofPlat}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Total:
                        </Form.Label>
                                    <Form.Control
                                        readOnly
                                        className="control-margin"
                                        type="text"
                                        name="totalCostofPlat"
                                        placeholder="0.00"
                                        value={this.state.totalCostofPlat}
                                    />
                                </Form.Group>
                            </Form>
                            {/* Box Lunches */}
                            <Form inline>
                                <Form.Group>
                                    <Form.Label>
                                        Number of Boxed Lunch:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="number"
                                        name="numofBox"
                                        value={this.state.numofBox}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label id="cost-box-label">
                                        Cost per Box:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="costofBox"
                                        placeholder="0.00"
                                        value={this.state.costofBox}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ marginRight: "1px" }}>
                                        Total:
                        </Form.Label>
                                    <Form.Control
                                        readOnly
                                        className="control-margin"
                                        type="text"
                                        name="totalCostofBox"
                                        placeholder="0.00"
                                        value={this.state.totalCostofBox}
                                    />
                                </Form.Group>
                            </Form>
                            <h5>Sides</h5>
                            {/* Chips */}
                            <Form inline>
                                <Form.Group id="chip-check">
                                    <Form.Check
                                        type="checkbox"
                                        label="Chips"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ marginRight: "15px" }}>
                                        Number of Chips:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="number"
                                        name="numofChips"
                                        value={this.state.numofChips}
                                        onChange={this.itemCalc}
                                    />
                                    <Form.Group>
                                        <Form.Label id="cost-chip-label">
                                            Cost per Chip:
                            </Form.Label>
                                        <Form.Control
                                            className="control-margin"
                                            type="text"
                                            name="costofChips"
                                            placeholder="0.00"
                                            value={this.state.costofChips}
                                            onChange={this.itemCalc}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            Total:
                            </Form.Label>
                                        <Form.Control
                                            readOnly
                                            className="control-margin"
                                            type="text"
                                            name="totalofChips"
                                            placeholder="0.00"
                                            value={this.state.totalCostofChips}
                                        />
                                    </Form.Group>
                                </Form.Group>
                            </Form>
                            {/* Salad */}
                            <Form inline>
                                <Form.Group id="salad-check">
                                    <Form.Check
                                        type="checkbox"
                                        label="Salads"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ marginRight: "9px" }}>
                                        Number of Salads:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="number"
                                        name="numofSalads"
                                        value={this.state.numofSalads}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label id="cost-salad-label">
                                        Cost per Salad:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="costofSalads"
                                        placeholder="0.00"
                                        value={this.state.costofSalads}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ marginRight: "1px" }}>
                                        Total:
                        </Form.Label>
                                    <Form.Control
                                        readOnly
                                        className="control-margin"
                                        type="text"
                                        name="totalofSalad"
                                        placeholder="0.00"
                                        value={this.state.totalCostofSalads}
                                    />
                                </Form.Group>
                            </Form>
                            {/* Pickles */}
                            <Form inline>
                                <Form.Group id="pickle-check">
                                    <Form.Check
                                        type="checkbox"
                                        label="Pickles"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ marginRight: "6px" }}>
                                        Number of Pickles:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="number"
                                        name="numofPick"
                                        value={this.state.numofPick}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ marginRight: "8px" }}>
                                        Cost per Pickle:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="costofPick"
                                        placeholder="0.00"
                                        value={this.state.costofPick}
                                        onChange={this.itemCalc}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Total:
                        </Form.Label>
                                    <Form.Control
                                        readOnly
                                        className="control-margin"
                                        type="text"
                                        name="totalCostofPick"
                                        placeholder="0.00"
                                        value={this.state.totalCostofPick}
                                    />
                                </Form.Group>
                            </Form>
                            {/* Cookies */}
                            <Form inline>
                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Cookies"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Number of Cookies:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="number"
                                        name="numofCook"
                                        value={this.state.numofCook}
                                        onChange={this.itemCalc}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Cost per Cookie:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="costofCook"
                                        value={this.state.costofCook}
                                        onChange={this.itemCalc}
                                        placeholder="0.00"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ marginRight: "1px" }}>
                                        Total:
                        </Form.Label>
                                    <Form.Control
                                        readOnly
                                        className="control-margin"
                                        type="text"
                                        name="totalCostofCook"
                                        value={this.state.totalCostofCook}
                                        placeholder="0.00"
                                    />
                                </Form.Group>
                            </Form>
                            <hr></hr>
                            <h5>Sub Total:  $<span>{this.state.subTotalDisplay}</span></h5>
                            {/* Delivery */}
                            <Form inline>
                                <Form.Group>
                                    <Form.Label>
                                        Delivery Fee:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="deliveryFee"
                                        value={this.state.deliveryFee}
                                        onChange={this.orderTotal}
                                        placeholder="0.00"
                                    />
                                </Form.Group>
                            </Form>
                            {/* Gratuity */}
                            <Form inline>
                                <Form.Group>
                                    <Form.Label id="label-gratuity">
                                        Gratuity:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="gratuity"
                                        value={this.state.gratuity}
                                        onChange={this.orderTotal}
                                        placeholder="0.00"
                                    />
                                </Form.Group>
                            </Form>
                            {/* Sales Tax */}
                            <Form inline>
                                <Form.Group>
                                    <Form.Label id="label-sales-tax">
                                        Sales Tax:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="salesTax"
                                        value={this.state.salesTax}
                                        onChange={this.orderTotal}
                                        placeholder="0.00"
                                    />
                                </Form.Group>
                            </Form>
                            {/* Adjustment */}
                            <Form inline>
                                <Form.Group>
                                    <Form.Label id="label-adjustment">
                                        Adjustment:
                        </Form.Label>
                                    <Form.Control
                                        className="control-margin"
                                        type="text"
                                        name="adjustment"
                                        value={this.state.adjustment}
                                        onChange={this.orderTotal}
                                        placeholder="0.00"
                                    />
                                    <Form.Text>This is what the text will look like.</Form.Text>
                                </Form.Group>
                            </Form>
                            <h4>Total: $<span>{this.state.orderTotalDisplay}</span></h4>
                            {/* Order notes */}
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Notes:
                                    </Form.Label>
                                    <Form.Control
                                        className=""
                                        as="textarea"
                                        rows="3"
                                        name="orderNotes"
                                        value={this.state.orderNotes}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                            </Form>
                            <Button variant="primary" className="form-button" onClick={this.submitOrder}>Submit</Button>
                            <Button variant="secondary" className="form-button">Close</Button>
                        </div>
                    </Collapse>
                </Container>
            </>
        );
    };
};

export default OrderForm