import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {
    Drawer, ListItem,
    ListItemText,
    Button,
} from '@mui/material'
import { Close} from '@mui/icons-material/';
import '../css/navbar.css'

const data = [
    {
        name: "Home"
        ,link:"/"
    },
    { name: "Products", link:"/products" },
    { name: "Blogs" , link:"/blogs"},
    { name: "Careers", link:"/careers" },
    { name: "About Us", link:"/about" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 250, paddingTop:'50px', display:'flex', flexDirection:'column', alignItems:'center' }} onClick={() => setOpen(false)}>
            <Close className=' self-end mr-11' />
            {data.map((item, index) => (
                <NavLink to={item.link}>
                <ListItem key={index}>
                    <ListItemText style={{
                        fontFamily: 'Inter, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '15px',
                        lineHeight: '15px',
                        whiteSpace: 'nowrap',
                        color: 'rgba(11, 70, 45, 0.9)',
                        cursor: 'pointer',
                    }} primary={item.name} />
                </ListItem></NavLink>

            ))}
            <Button style={{
                backgroundColor: '#8CB561', marginLeft: '12px', paddingLeft: '26px',
                paddingRight: '26px',
                paddingBottom: '3px',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '15px',
                lineHeight: '15px',
                whiteSpace: 'nowrap',
                color: 'white',
                width: '120px',
                height: '42px',
                borderRadius: '7px',
                marginRight:'30px'
            }} >Buy Now</Button>

        </div>
    );
    return (

        <nav className='navbar flex items-center gap-6  '>
            <div className='drawer'>
                <Button style={{display:'block', paddingBottom:'13px'}} onClick={() => setOpen(true)}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div></Button>
                <Drawer  open={open} anchor={"left"} onClose={() => setOpen(false)}>
                    {getList()}
                </Drawer>
            </div>

            <NavLink to={'/'}><img alt='Logo' src='/SECURE Logo.png' className='logo' /></NavLink>
            <ul >
                <li> <NavLink style={({isActive})=>{
                   return isActive ? {color:'#8CB561'}:{}
                }} to={'/'}>Home</NavLink>
                </li>
                <li>
                <NavLink style={({isActive})=>{
                   return isActive ? {color:'#8CB561'}:{}
                }} to={'/products'}>Products</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{
                   return isActive ? {color:'#8CB561'}:{}
                }} to={'/blogs'}>Blogs</NavLink>
                </li>
                <li>
                <NavLink style={({isActive})=>{
                   return isActive ? {color:'#8CB561'}:{}
                }} to={'/careers'}>Careers</NavLink>
                </li>

                <li>
                <NavLink style={({isActive})=>{
                   return isActive ? {color:'#8CB561'}:{}
                }} to={'/about'}>About Us</NavLink>
                </li>
                <NavLink to={'/products'}>
                <button className='sign'>
                    Buy Now
                </button>
                </NavLink>

            </ul>
        </nav>
    )
}
