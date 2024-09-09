import React from 'react'

function Contact() {
    return (
        <div className='contact' id='contact'>
            <section className="section section-center">
            <div>
                <h2>LET'S BUILD A THING TOGETHER</h2>
            </div>
            <div className="form">
                <form action="https://formspree.io/f/xanwkkdr" method='POST'>
                    <div className="connection-info">
                        <input type="text" required placeholder='FIRST NAME *' 
                        name='firstname'
                        autoComplete='off'
                        />
                        <input type="text" required placeholder='LAST NAME *' 
                        name='lastname'
                        autoComplete='off'
                        />
                        <input type="email" required placeholder='EMAIL *' 
                        name='email'
                        autoComplete='off'
                        />
                        <input type="phone" placeholder='PHONE' 
                        name='username'
                        autoComplete='off'
                        />
                    </div>
                    <input type="text"   required           placeholder='SUBJECT *' 
                        name='subject'
                        autoComplete='off'
                        className='contact-subject'
                    />
                    <textarea 
                    className='text-area'
                    name="message"
                    required
                    placeholder='MESSAGE *'autoComplete='off'
                    >
                    </textarea>
                    <input className='btn' type="submit" value="SEND IT"/>
                </form>
            </div>
            </section>
        </div>
    )
}

export default Contact