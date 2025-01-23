
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-12'>
                    <h4>About us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam inventore ut culpa consequatur laudantium.</p>
                    <h4>Subscribe</h4>
                    <div className={styles.email}>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn btn-primary'>Send</button>
                    </div>
                </div>
                <div className='col-md-4  col-sm-12 '>
                    <h4>Quick Links</h4>
                    <div className={styles.foot}>
                        <ul>
                            <li>Sell online</li>
                            <li>Features</li>
                            <li>Shopping cart</li>
                            <li>Store builder</li>
                        </ul>
                        <ul>
                            <li>Mobile</li>
                            <li>commerce</li>
                            <li>Dropshipping</li>
                            <li>development</li>
                        </ul>
                        <ul>
                            <li>Point of sale</li>
                            <li>Hardware</li>
                            <li>Software</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4  col-sm-12'>
                    <h4>Contact info</h4>
                    <p>Address: 123 Main St, Anytown, USA</p>
                    <p>Phone: 555-555-5555</p>
                    <p>Email: [info@yourwebsite.com](mailto:info@yourwebsite.com)</p>
                </div>
            </div>

            <div className={styles.foote}>
                <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
            </div>
        </div>
    )
}

export default Footer
