import { useState } from 'react';
import {
    Drawer, ListItem,
    ListItemText,
    Button,
} from '@mui/material'
import '../css/navbar.css'

const data = [
    {
        name: "Home"
        ,
    },
    { name: "Products" },
    { name: "Blogs" },
    { name: "Careers" },
    { name: "About Us" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 250, paddingTop:'50px', display:'flex', flexDirection:'column', alignItems:'center' }} onClick={() => setOpen(false)}>
            {data.map((item, index) => (
                <ListItem key={index}>
                    <ListItemText style={{
                        fontFamily: 'Inter, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '15px',
                        lineHeight: '15px',
                        whiteSpace: 'nowrap',
                        marginLeft: '63px',
                        color: 'rgba(11, 70, 45, 0.9)',
                        cursor: 'pointer',
                    }} primary={item.name} />
                </ListItem>

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

            <img alt='Logo' src='/SECURE Logo.png' className='logo' />
            <ul >
                <li><a href="">
                    Home</a>
                </li>
                <li>
                    <a href="">
                        Products</a>
                </li>
                <li>
                    <a href="">
                        Blogs</a>
                </li>
                <li>
                    <a href="">
                        Careers</a>
                </li>

                <li>
                    <a href="">
                        About Us</a>
                </li>

                <button className='sign'>
                    Buy Now
                </button>

            </ul>
        </nav>
    )
}
