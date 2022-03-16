import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Index.css'
import { HashLink, NavHashLink } from 'react-router-hash-link';

import AboutMe from './AboutMe';

function Index() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, []);

    return (
        <>
            <div style={{ height: '100vh' }}>
                <div>
                    <nav className="navbar">
                        <div className="navbar-container">
                            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                                <img alt='logo' src='https://cdn.discordapp.com/attachments/840934970548813854/953648319928864788/Watermark.png' />
                            </Link>

                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>

                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <NavHashLink smooth
                                        to='/#home' className='nav-links' scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }} onClick={() => { closeMobileMenu() }}>
                                        About
                                    </NavHashLink>
                                </li >
                                <li className='nav-item'>
                                    <NavHashLink smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }}
                                        to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                                        Projects
                                    </NavHashLink>
                                </li>
                                <li>
                                    <HashLink to='/notes'
                                        className='nav-links-mobile' onClick={closeMobileMenu}>
                                        Resume
                                    </HashLink>
                                </li>
                            </ul>
                            <div style={{ paddingRight: '30px' }}>{button && <button className='btn--outline'>Resume</button>}</div>
                        </div>
                    </nav>
                </div>
                <div style={{ height: 'calc(100vh - 80px)' }} className='herosection-main'>
                    <div className='herosection-container'>
                        <div className='herosection-content'>
                            <div className='namaste'>
                                <h4 style={{ opacity: '80%', position: 'absolute', fontSize: '3rem', fontWeight: '400' }}>namaste.</h4>
                                <h1 style={{ opacity: '15%', color: '#707070', fontSize: '7rem' }}>NAMASTE.</h1>
                            </div>
                            <h2 style={{ fontSize: '4rem', fontWeight: '300' }}>Anirudh Chaturvedi</h2>
                            <div className='social-container'>
                                <img style={{ width: '35px' }} alt='LinkedIn Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png' />
                                <img style={{ width: '35px' }} alt='Twitter Logo' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png' />
                                <img style={{ width: '35px' }} alt='Youtube Logo' src='https://www.pngitem.com/pimgs/m/11-114700_youtube-red-circle-youtube-circle-icon-png-transparent.png' />
                                <img style={{ width: '35px' }} alt='Behance Logo' src='https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png' />
                                <img style={{ width: '35px' }} alt='Spotify Logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABHVBMVEUe12D///8ZFRUe3mMe2mH8/PwZAA/4+PgZABAZAAwe4GQe3WP29vbz8/MZAArw8PAZEBTT09Po6Oja2trh4eHMzMwZDRPj4+MA2FgZCRIA1FEA1ljU1NQZDxTKxMkdv1YezFwckEMbbzYbeDkaViwdrU8cnkkaPyMe0l4dtVIeyFoZHRgbhD4aSScaXC4cjUIdqE0aMx8aUysbgT0bYzGM56Y62m8ZJxsaQyXb6N7A8c7q++9u4pHe+Oax7sJ/5Z3S9NyqzbR90JVP03lb0n+Sy6K4xr1p0YdJ3Xmc6rJh4IjV9t/H89Tm+uyl7LmT6KsZIhmh37Ow4LzJ4tCm27UZLx602r+P2KSk0bG5z7900ZA91W++xcFg0YLBxMJCoyaZAAARuElEQVR4nO2d+V/ayBvH0zLEHBqoZyByBCQcCggo9HC1aj16bNvt1rXa3f7/f8Z3ZhIQITOZyUHi99XPL+uxjbx97nkSFJ79v0uI+wVErt+ET1+/CZ++fhM+ff0mDFdpR4v8mQsgTP/x+vPhyYdhQzCMPJZhCMPro5P3x2/fRP/jIyVMfzw+/GAgIsMAQJgWENAXIe3w6P2nSDkjI3zz+vDaQNbyEECcwtHnP6J6IdEQfjocMsBNCWIaR8eR2DJ8wvQxdEwDeFO5UA6/hG/KsAlff/BF5whAyPd/hvuKQiX8eGIEwJtAXh+HWU5CJDyGsRcQz5FhnITnrWERvjkMbr5pxvz1p5BeWTiEfx6FZb6JQH54HMprC4MwAj6bUQiDMTjhm5NI+LDyw9fxEx5GxycgO15/jJfwGETJh5U/CtbqBCL84zofNZ+A8urnuAgPF8GHlB8GKI/+CT82InfQKcYviyc8zIdY4L1lDP22qz4J3wwXaEBbfqPRH+HxoiLwEeIHXw25L8KTOAChpwp+Eo4Pwhg81BHI+2jj+Ak/hjlD8Cp/Ej1hLCH4IOND1IRf4gVEZYOzieMkjCnHTAsAvsrIR/ghrhwzLWBwpVQuwuskAELl30ZEmBRAiMhxiMNBmBxALiuyEyYJkAeRmTARSWZKedZ0w0p4lDBAWBgZ6yIjYeyF3k1sowYbYcytmruM6/AI3yYRECIehUX4JnEx6Cj/PiTCYYzjEl0slZ+BMHlp9EEMCdWbMJFZZiwwDE74Z5IBoRE9h35PwmHcDB7yDEUvwsMEB6Etw6PwexAmtBJOy+vkxoNQSGyheFCevkWlEybfR5Hofkol/CP5PopE796ohEnPo2NRx2EaYaJr/bSodZ9CmH4SQYhlUDZvFMKnkWZsUZINmfCNXx8FUKqaQlImgp/AL6noe1EUIOPQByHvSIGxFEUol5r7lrk3qFY6O/22o36/c1CpDrrmfq3ZKgNIrKqhsuaJQwaRkL1SQLRUCpSbVrfS6T2XZE2WRVGCykFtYqGP8JdEUYbfl3brnUrXapYBNG04nOQOnEjIdHoI2RShZA06PUmTIUIum33OouxmDsFqYm+nCkGhSQNzEo1IIvQ2IYBwTbPSEyFarsAENq8CJJXlXLtqlQRFDYJJNCKJkB6FkK68X60jODajeQhyamK9YpVgfPqlJBmRQEhLpEARatUbGE2bYcA9aBNiSp1uCSi+KEnplEB4QjShCqy+KEt+3dJLOVHL7ZglP5D5JQ7CJaIJFUsScxHRTVHuVvYFhROS0Ni4E34mmVCpaKEEnpeykizuWA1OSNfGxpUwTTohVaraIvhsQVP2uSDdj2xcCUlnF6C5QEAbUu7sgxQjJHA9z3AlJJUK5WXUIegCKeeqJUZDuhYMN0JSngGtBZvQVlbS6hZIMRC65ho3wmOCCYElxkEItSlnBwwRCYYuucaFMH1OuEBqIMVEiA154O2sbqvvecI0sZ9JVeMjhJK0jhej8WXeiC6EJCcV1L1YCWHW0XY8GBvzT1HPEabTH0jXADWZ/dVkswV7LISyB8Us42hFZzxoKRRCFzedJ1ymNN1eNszmHobcm/rLdr/TOYDqdHba7XpvBB3NGY9zvmElrdpQiS/Q+Mxgw9fkuUkdkJJpFs950qhf2TP3m6UyHrDw6YwjdFaDuulWqWmZg4P+SJLRyLzpg1QSLaIZwfWcm84SptPksQJqd36mQEOP3DsYwFldRccv9POX8TGVopZL+91K+zk6G+Acw7Jym7hPya94EzYogKAkTr+aLOyqpJdoPsfHaJR/6A6rqoraaJqVuqSJXPOY1CP9MOO1JyH9EBGUvoqOY8HGONsxS0LQMxbEKZSsSo9nphYrBEc1DmfddI6QWCuc1wP2nsNfuCiL7W4p5f/MYe6yqtKoDV4yz9Zayf0nw7aGTugRhkgp0DT3zFrD31kDFTMFKas3GsuILVUICXUuEGcJlxhunkEBFNXmFJ1xmX3REzJbILnpJw/CTPz7JuSwVsfLklrZ/V8b72fcdJYwIYt7oAhWXxYp1ZIYiB+WaITpNPGEZuECSrk70oiGJNlQaNAJlzwTzQIF3bXW0Qidokjqa/IZOuF1sm6+gIYcSG7OKnZIQ3/+7WMjzhCuJMiEtoAqmM/nGbUasas5phCml14lI9E8lqqauzOMUp/YfBuHVMK3egivyG6u1dSUVHsj6jcEVGDmpseaXJbcPYOjZRqhR89GFd6UKqBRbtYsszuooLEQqr+zg/a/e12r1iw1BDhE+dmipYSBPGEUv7bIVwBDKuF7f4RoU5pq1cxqp74rjnfAeLS3JY7Xv1rupl3Zw0tR3r4o1YJ5NVcowI6/Qr8ZbWWJTLjMXywgnFqudQ96moZXpV4jLT4GkDXxZcWslblad6C09nbq9Y5Zpp+d6plHgThDSDyjIdApoNnt7MK5h9Z+uGoTHQp87XR5WnjkKnDI9vi/8q/IhEvLP3l+paC514aG83/mggwqa73qfllh3U0wSH9LJEwvrdAG/Md4ZWtHCmcNXIDW7FVrghLS3Sf6t2UyYYbxIqlWn2mKYxbeF5rlUGZOg0rIlmhS++SO2L9gkqx3W4pXmHkT/kUmXF5lIoxujbgJIaElgxnSuF0hE75iamnAboSbbgjZ3wdBvNX48qggzhCytKXA4jjc96OcnK22/BvSOAxKmOpEvgnOSlq/pvqMSESYDkZ4s4jbMXLajcm0+OUiXGEjjDIMp1QQc13Bhx2Nw0xAQuUlS53PFuybLsebNT+MWVHaE7jtSCdkyaW0VXAh52zXcl979Xa/vwMnqH6/Xe99Hd93ynkboyh1AacdjS80QqabSktu5RB30lKvUzUtOAaiU/rJdg19AGfCMlqsVQ/qm2ivxt7Mis8tvqbVuKUQslV8pfJ4jVhA907iaQgo9r3chF+NPSOrjaY16Iw01ls3s3KvSdv7RkAoqO0JImwo5V7FQrdMso/uAN393GiaByOZaRNT0Dpldlc1/qIRMl5ErWgSzB6wkxyh0cffzb1o2kP34cLp0tOWtL3vHOE3CmGG9TkgpTWofx3tmK2g0wDaN+1XRprolZ81izWp6v/QbHjO7GgpJRXgluXH11LVUrfuBalRTp8eSf+bRngU05E3TL1ls62JlKCUDhiNqL+ieel9jGfeqtLq3pDWFFAi43WMLTLhcuavWE/1oSWbFZF0qEXap81pNUOeLTLf4t5bgFTDHMmuw4tMXFU8vsL1KmV6yvwdxql+QKmpWtvtlITRhuBqlTzjL2XWE7GZAUqpM8/IGIfGLZVwi/U4MWK5MIodtpqvf6MSshfEqAUZ29p08WBNNLAc0k4TV+MsFzMCSm30cCKkdRnLobFOJkQl/3tIqQbYUm05n3FfRDEluz5KmsnYl4KfW7TNzMpqsGRq70bhCNVooSdJLdM0u1CmZVn7zVJLSOFOj4M01ahKmqyJByXWrtS4WqXunjLrPr0UDUSK0Gpae5Wd+nMZ3Skri1iS/R8ZbQ+lm/4B2h4C9u2hqraaJeaHStDs5EG4xZ1qIBseaqs7I+dBUsptsfb2UC7UK2ZTYDQnn3vrfz9OpbM74MzWGY8RYZuVau0PdnY1roMJ+8xDg5NzK8y1Gpax7kG4+g9zIMIGqzbo5zjZpg0qocfwrHA2TuMXdb6VoezxUapZYyVULHTPa9Djb0RZ3yuFZkrjdiaVzhIur64zBiJ4XI+DaFPSRoOS5/aaSTAMPQgzW7ds522dUJ+Bykpar8v7QKWr1mbCcO6+tgxbRYxghVgQtY7vbczkdV2try7TCJ8twUBkuVI0j0Dl5JEpBIpI/ftsopm7g3ZldZ2lNVXa0WzYsqJYDbID1tdmE80cIQxElnrBRpjNZgtYPIsZSa74ZgTns9XQ5U72zBaLm6YqJC+dPPqkiZtfb3p1pN7NroQbObYnniSt4nHbE0n69/VZJ51/3oLNTV0yjfPo09f+wcDEbTZeU9hvToPas0aruW/uVdq7oubZI0hylX+rBmVszznpPCFsvpncdLpa4B5stFO1ai1BcZYz834GHORGye7zqLcbSZLJn3LAu7XZauhCiNyU6SijLSM7ZPHeyX70KcXYIwN8t99+FT0hQ7RlVr7h2jgh6T/mw9CFENYLpqKfMkeahrpnn48+TZ6QIZmyoJGeiyFecm2uVrg+Ybm6fsnUm6pKOeibykDKltmWSZDyAZcVjTMXJ3UhRG76jvVdDPxgzVwCbSzqmru7ak2u0fDOxUndCKGbso9QYQhClqpZ2cWQ5GcO3C5zPl/u3QhxNl1b9PsJAhVY9flD4OyIg1A/hV03EyFy04vFn+4DpTn3gEz2OccdvcPt+XLvSoiL/naEKOTXqLQOHjMWeuypRv/u6qSuhLA3ZSsYoQszTvmqOGD30sa2W55xJ0S55kVcy2Cl1J+8jVFWZF+j6BduxdCd0M418RhRsA/z7SVpjvxw07waL1zzDIEQTvprLyKE8BBQu5Isilqd+aAbm9A1z5DeJwrlmtsYl6UpoWZaJZ7We/jCrZ8hE2Ijxvoeu5yLHP2He6kgEdpG/JGAjTejwHWRZEISITJiMTHbUk/pd0QTkt5VEBvx7qkY0bgiRiGZEEdighbCdG2QEimZENfE7Y2E3LfgIf2CYkIyITbik0g24LxIaGeohHZ3Wrx6An5q/Is6UpIJKYRLKNlsxP3yvYV8lGJCyrtd4znxxWnS/RT6KB4q/BCiirFWvE864gYtzVAJnWRT5HhwNgbpp3Qfpf9tBJxsXlwmOdnoZ0VqmvEixH66keCSAYPQw0c9/oIH8tP17eJZUhFBY8P2Ud+Ejp8WzxPqqPodbNfoPupJmF5BiBvJzDb6DxSEdB/1/GtITt3/N24YN+m3OAhpeZSB0AnFjbvk+al+X/QOQgZCFIqoKiautzHeQUDPIGQidLJNwmqGcV7c8KqEjIQoFDFiDKsMshxAryzDRmhnm2QhGj8hIM4yoRDa2WZtIzmIyIJMWYaVcJxQkxKLXICMhGPERGRU/Z0NSJkJuQlxQsWId5H8PSo+wHsHkCHLsBM+IF42YkaEnQwXICvhBHHj189Y2xvYi/IBMhM6iLALL17FF4ygcccLyE44hRhb1dDPf23AOsgFyEHoZFSEeNeIxVP1syI/IA+hjYjGxeKvdzHcjSKcQg9FrdoyDyAXIUJcgYgw3xQvjAXnVOihKATX2Vo1v4TjNhwhXv5cpBmBcQE9FOYYbkBeQoyIg3GjeKsvzIz6+aUdgmhc4gPkJrRT6hZGvDxfjBkNYBsQeihXjvFJiIMReSpivBCiT6pAv/o1BuTLMX4JbUTHU4v3esSM+s87xIc8NMPtoT4JJ56KzXj5Lspw1BsXxSkP9QHoj3DajLD+n0fFaAg237afHBqMEOVUbEab8TQSRl24RXwwhfo3YADCiRm3bTv+F3I8An2I7YccdMtfiglKaJvxgfHyHoRnSEM//+HwIQf1b8BghMiMyFXXUY+D8urFz1AMCX9T95c233ZgvmCEY1fdGtuxeHffCAgJbPM5fCgAl4MBBiSEiDOMxdMrwTckwrv4F+Mh/4R8maB8gQkx4/IUI4a8H+rcowekE95N8LZx/IXAFwIhdlVkR5hzHiAvL/6D/sqKCen087NT2zlt9wyLLxTCsa86hsSQNuX9uaDTOYFh6Mbwv1tEN8GD7hlC/I0VCqHNuDwxpA2JKIuXP26vzhu6jkixAHA+gF8CP9+dXZz+GsM5eMh8K0sh8YVG+MyuHbYhJ+46xoSgdz8ubs/u76+w7s9uL36cXv4qFh/gNl44eI75QuILk3BiSGjJrWlTToE+0tR3Md0ELzTzYYVJ+OwRJKJEmNOc84Lf357QOXhh8oVO+GwMiSltj4WcCHSa1f4Uo62tr29hukjwnkVB+MyGtCkxJjSnTfpY6zYbhnPoQsd7FhEhUnqMiTgRKNYW0vgT9A0EFx0dUmSESGkbc2l5GZFi1LHQ5wgNs0VGhxQpoa20o6Vpjb8YJZutBRBOlE4vjutBiySMR78Jn75+Ez59/SZ8+vpN+PT1PxCRN8ziDykzAAAAAElFTkSuQmCC' />
                                <img style={{ width: '35px' }} alt='LinkedIn Logo' src='https://cdn-images-1.medium.com/max/1200/1*fnPVSaFGoh-NO_IPFrSoaQ.png' />
                            </div>
                        </div>
                        <img style={{ width: '400px' }} alt='gr9' src='https://cdn.discordapp.com/attachments/840934970548813854/953644242750832690/Group_9.png'></img>
                    </div>
                </div>
            </div>
            <AboutMe></AboutMe>
        </>
    )
}

export default Index