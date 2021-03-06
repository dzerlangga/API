import React, {Component, Fragment} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitleAlt3 from '../../../Layout/AppMain/PageTitleAlt3';

import Chart from 'react-apexcharts'

import IncomeReport from '../Commerce/Examples/Components/IncomeReport';
import IncomeReport2 from '../Commerce/Examples/Components/IncomeReport2';

import bg1 from '../../../assets/utils/images/dropdown-header/abstract1.jpg';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

import classnames from 'classnames';

import {
    Row, Col,
    Button,
    CardHeader,
    Table,
    ButtonGroup,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Popover,
    PopoverBody,
    Progress,
    Card,
    CardBody,
    CardFooter,
    CardTitle, 
    Container,
    ListGroup,
    ListGroupItem,
    CustomInput, Input,
    Dropdown, DropdownItem, DropdownToggle, DropdownMenu,
    UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter

} from 'reactstrap';


import ReactTable from "react-table";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    LineChart,
    Tooltip,
    Line
} from 'recharts';

import CountUp from 'react-countup';

import {
    faAngleUp,
    faAngleDown,
    faCommentDots,
    faBullhorn,
    faBusinessTime,
    faCog
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class MinimalDashboard2 extends Component {

    constructor(props) {
        super(props);


        this.state = {
          modal: false
      };

      this.tambah = this.tambah.bind(this);

      this.toggle = this.toggle.bind(this);

      this.togglePop1 = this.togglePop1.bind(this);

      this.state = {
        popoverOpen1: false,
        activeTab: '2',
    }
}

togglePop1() {
    this.setState({
        popoverOpen1: !this.state.popoverOpen1
    });
}

toggle(tab) {
    if (this.state.activeTab !== tab) {
        this.setState({
            activeTab: tab
        });
    }
}

tambah() {
    this.setState({
      modal: !this.state.modal
  });
}

render() {
    const closeBtn = <button className="close" onClick={this.tambah}>&times;</button>;

    return (
    <Fragment>
    <ReactCSSTransitionGroup
    component="div"
    transitionName="TabsAnimation"
    transitionAppear={true}
    transitionAppearTimeout={0}
    transitionEnter={false}
    transitionLeave={false}>
    <PageTitleAlt3
    heading="Container Dashboard"
    subheading="This is an example dashboard created using build-in elements and components."
    icon="lnr-apartment icon-gradient bg-mean-fruit"
    />
    <Card tabs="true" className="mb-3">
    <CardHeader className="tabs-lg-alternate">
    <Nav justified>
    <NavItem>
    <NavLink href="javascript:void(0);"
    className={classnames({active: this.state.activeTab === '1'})}
    onClick={() => {
     this.toggle('1');
 }}
 >
 <h1>Data Guru</h1>
 <div className="tab-subheading">
 <span className="pr-2 opacity-6">
 <FontAwesomeIcon icon={faCommentDots}/>
 </span>
 Totals
 </div>
 </NavLink>
 </NavItem>
 <NavItem>
 <NavLink href="javascript:void(0);"
 className={classnames({active: this.state.activeTab === '2'})}
 onClick={() => {
     this.toggle('2');
 }}
 >
 <h1>Data Siswa</h1>
 <div className="tab-subheading">
 Products
 </div>
 </NavLink>
 </NavItem>

 <NavItem>
 <NavLink href="javascript:void(0);"
 className={classnames({active: this.state.activeTab === '3'})}
 onClick={() => {
     this.toggle('3');
 }}
 >
 <h1>Data Pelajaran</h1>
 <div className="tab-subheading">
 <span className="pr-2 opacity-6">
 <FontAwesomeIcon icon={faBullhorn}/>
 </span>
 Income
 </div>
 </NavLink>
 </NavItem>
 </Nav>
 </CardHeader>

 <TabContent activeTab={this.state.activeTab}>
 <TabPane tabId="1">
 <CardBody>
 <IncomeReport/>
 </CardBody>
 </TabPane>
 <TabPane tabId="2">
 <CardBody>
 <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
 <ResponsiveContainer width="100%" height="100%">
 <Col sm="12" md="12" xl="12">
 <Card className="mb-3">
 <CardHeader className="card-header-tab">
 <div>

 <Button color="primary" onClick={this.tambah}>Tambah Data Siswa</Button>

{/* Modal tambah Siswa */}

<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
<ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
<ModalBody>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.
</ModalBody>
<ModalFooter>
<Button color="link" onClick={this.toggle}>Cancel</Button>
<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
</ModalFooter>
</Modal>

{/* END Modal tambah Siswa */}

</div>
<div className="btn-actions-pane-right actions-icon-btn">
<UncontrolledButtonDropdown>
<DropdownToggle className="btn-icon btn-icon-only" color="link">
<i className="pe-7s-menu btn-icon-wrapper"/>
</DropdownToggle>
<DropdownMenu
className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
<DropdownItem header>Header</DropdownItem>
<DropdownItem>
<i className="dropdown-icon lnr-inbox"> </i>
<span>Menus</span>
</DropdownItem>
<DropdownItem>
<i className="dropdown-icon lnr-file-empty"> </i>
<span>Settings</span>
</DropdownItem>
<DropdownItem>
<i className="dropdown-icon lnr-book"> </i>
<span>Actions</span>
</DropdownItem>
<DropdownItem divider/>
<div className="p-3 text-right">
<Button className="mr-2 btn-shadow btn-sm" color="link">View
Details</Button>
<Button className="mr-2 btn-shadow btn-sm"
color="primary">Action</Button>
</div>
</DropdownMenu>
</UncontrolledButtonDropdown>
</div>
</CardHeader>
<CardBody>
<ReactTable
columns={[
    {
        Header: "Name",
        columns: [
        {
            Header: "First Name",
            accessor: ""
        },
        {
            Header: "Last Name",
            id: "",

        }
        ]
    },
    {
        Header: "Info",
        columns: [
        {
            Header: "Age",
            accessor: ""
        },
            {
                Header: "Aksi",
                accessor: "aksi",
                Cell: row => (
                    <div className="d-block w-100 text-center">
                        <Button outline className="mb-2 mr-2 btn-dashed btn-shadow-info" color="info"><i className="pe-7s-look"></i>

                        </Button>
                        <Button outline className="mb-2 mr-2 btn-dashed btn-shadow-primary" color="primary"><i className="pe-7s-pen"></i></Button>
                        <Button outline className="mb-2 mr-2 btn-dashed btn-shadow-danger" color="danger"><i className="pe-7s-trash"></i></Button>
                    </div>)
            },
        ]
    }
    ]}
    defaultPageSize={20}
    style={{
        height: "428px" // This will force the table body to overflow and scroll, since there is not enough room
    }}
    className="-striped -highlight -fixed"
    />
    </CardBody>
    </Card>
    </Col>
    </ResponsiveContainer>
    </div>
    </CardBody>
    </TabPane>
    <TabPane tabId="3">
    <CardBody>
    <IncomeReport2/>
    </CardBody>
    </TabPane>
    </TabContent>
    </Card>

    </ReactCSSTransitionGroup>
    </Fragment>
    )
}
}