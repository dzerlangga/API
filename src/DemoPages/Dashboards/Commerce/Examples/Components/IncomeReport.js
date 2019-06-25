import React, {Component, Fragment} from 'react';
import {
  Row,
  Col,
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
  CustomInput,
  Input,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
} from "reactstrap";


import ReactTable from "react-table";

import {
    ResponsiveContainer,
    LineChart,
    Tooltip,
    Line
} from 'recharts';


export default class IncomeReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
      };

      
      this.state = {
          edit: false
        };
        
        this.state = {
            editdata: null
        };
        
        this.state = {
            items: []
        };
        
        this.tguru = this.tguru.bind(this);
        this.editguru = this.editguru.bind(this);
    }
    
    handleChange(items) {
        this.setState({
            editdata: items.target.value
        });
    }
  componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.map(data => (
        {
            album: data.albumId,
            id: data.id,
            title: data.title,
            status: data.url,
            gambar: data.thumbnailUrl
        }
        )))
        .then(items => this.setState({
            items,
            isLoaded: false
        }))
        .catch(error => alert('gagal mengambil data API', error))
    }

  tguru() {
    this.setState({
      modal: !this.state.modal
  });
  }
      editguru(items) {
          this.setState({
              editdata: items.original,
              edit: !this.state.edit
          });
}

    handleChange(name, value) {
        var b = Object.assign({}, this.state.editdata)
        Object.assign(b, { [name]: value })
        this.setState({
            editdata: b
        });
        setTimeout(() => {
            console.log(this.state)
        }, 1500)
    }



render() {
    const { items } = this.state;
    const closeBtn = <button className="close" onClick={this.tguru}>&times;</button>;
   const editb = <button className="close" onClick={this.editguru}>&times;</button>;
   return (
     <Fragment>
       <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
         <ResponsiveContainer width="100%" height="100%">
           <Col sm="12" md="12" xl="12">

             <Card className="mb-3">

               <CardHeader className="card-header-tab">
                 <div>
                   <Button color="danger" onClick={this.tguru}>
                     Tambah Data Guru
                   </Button>

                   {/* Modal tambah Guru */}

                   <Modal
                     isOpen={this.state.modal}
                     toggle={this.tguru}
                     className={this.props.className}
                   >
                     <ModalHeader toggle={this.toggle} close={closeBtn}>
                       Modal title
                     </ModalHeader>
                     <ModalBody>cek</ModalBody>
                     <ModalFooter>
                       <Button color="link" onClick={this.guru}>
                         Cancel
                       </Button>
                       <Button color="primary" onClick={this.tguru}>
                         Do Something
                       </Button>{" "}
                     </ModalFooter>
                   </Modal>

                   {/* END Modal tambah Guru */}


                                   {/* Modal Edit Guru */}

                                   <Modal
                                       isOpen={this.state.edit}
                                       toggle={this.editguru}
                                       className={this.props.className}
                                   >
                                       <ModalHeader toggle={this.editguru} close={editb}>
                                           Modal title
                     </ModalHeader>
                                       <ModalBody>
                                           <Form>
                                           <FormGroup row>
                                               <Label for="exampleEmail" sm={2}>Email</Label>
                                               <Col sm={10}>
                                                       <Input type="text" value={this.state.editdata ? this.state.editdata.id : ""} onChange={(d) => this.handleChange('name', d.target.value)} name="name" id="name" placeholder="lg" />
                                               </Col>
                                           </FormGroup>
                                           <FormGroup row>
                                               <Label for="exampleEmail2" sm={2}>Email</Label>
                                               <Col sm={10}>
                                                       <Input type="text" name="email" value={this.state.editdata ? this.state.editdata.status : ""} placeholder="default" />
                                               </Col>
                                           </FormGroup>
                                       </Form></ModalBody>
                                       <ModalFooter>
                                           <Button color="link" onClick={this.guru}>
                                               Cancel
                       </Button>
                                           <Button color="primary" onClick={this.tguru}>
                                               Do Something
                       </Button>{" "}
                                       </ModalFooter>
                                   </Modal>

                                   {/* END Modal Edit Guru */}

                 </div>
                 <div className="btn-actions-pane-right actions-icon-btn">
                   <UncontrolledButtonDropdown>
                     <DropdownToggle
                       className="btn-icon btn-icon-only"
                       color="link"
                     >
                       <i className="pe-7s-menu btn-icon-wrapper" />
                     </DropdownToggle>
                     <DropdownMenu className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
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
                       <DropdownItem divider />
                       <div className="p-3 text-right">
                         <Button
                           className="mr-2 btn-shadow btn-sm"
                           color="link"
                         >
                           View Details
                         </Button>
                         <Button
                           className="mr-2 btn-shadow btn-sm"
                           color="primary"
                         >
                           Action
                         </Button>
                       </div>
                     </DropdownMenu>
                   </UncontrolledButtonDropdown>
                 </div>
               </CardHeader>

               <CardBody>
                 <ReactTable
                   data={items}
                   columns={[
                     {
                       Header: "Name",
                       columns: [
                         {
                           Header: "ID Album",
                           accessor: "album"
                         },
                         {
                           Header: "ID",
                           accessor: "id"
                         }
                       ]
                     },
                     {
                       Header: "Info",
                       columns: [
                         {
                           Header: "Title",
                           accessor: "title"
                         },
                         {
                           Header: "Aksi",
                           accessor: "aksi",
                           Cell: row => (
                             <div className="d-block w-100 text-center">
                               <Button
                                 outline
                                       className="mb-2 mr-2 btn-dashed btn-shadow-info active" onClick={() => this.editguru(row)}
                                 color="info"
                               >
                                 <i className="pe-7s-look" />
                               </Button>
                               <Button
                                 outline
                                 className="mb-2 mr-2 btn-dashed btn-shadow-danger active"
                                 color="danger"
                               >
                                 <i className="pe-7s-trash" />
                               </Button>
                             </div>
                           )
                         }
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
     </Fragment>
   );
}
}
