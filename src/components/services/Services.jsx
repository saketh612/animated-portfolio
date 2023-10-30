import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            animate={"animate"}
            ref={ref}
        >
            <motion.div className="textContainer" variants={variants}>
                <p className="promise">
                I'm here to deliver real value for your company
                    <br />
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>About</motion.b> Me
                    </h1>
                </div>
                <div className="title">
                    {/* <button>WHAT WE DO?</button> */}
                </div>
            </motion.div>
            <motion.div className="listContainer" style={{marginBottom:"60px"}} variants={variants}>
                <motion.div
                    className="box"
                    id="Education"
                    whileHover={{ background: "lightgray", color: "black"}}
                    
                >
                    <h2 style={{ textAlign: "center", marginBottom: "10px" }}><img style={{height:"70px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAn1JREFUSEvtlT9oE2EYxp/3LmmLBrVTh1A7KNi9XdwUpwwFi5ScihDKHS0NAbcODp6rDsUlNMmFDgGv7YEg2sV6YnByExREughaiCgOYpo/5L5XTtuYHrle/ogd7Dfe97zv73mf7+M+wiEtOiQujsD/LPmuop6bUy45DqaJcBnAJyLYQpBtGObzbh0Hgj2wqA9gh5nt30Zg5/Nrb4OMtAV3CDuo9wciesYs7EZD2Csr1hevuAn+C7CDjLzyHksTrKqKToTbQRH1s8+MO4axqrs9muBEIjE0MFCLM3McQKwfQJvaLWbK1Gqh5UKhUN4HbhUvLCij9TorROSamOjDRNEFGoZp+p6xX3NVvTYhSRwXwjWC0Q5NmABlcjmz6Kdve6tV9eqIYZifvUWaFo8xU5wIbhJDnv0yES8TyZlM5sHW3l4qdf1EqVQvW5bltOrbgjVNcUUvAVonwno2a35tLfLch7Pe83O1s7Mz52RZvgngRrUaHtk7270+fmBuARVzudULmhZXwmHxJJ22fvjFp+u6tL39fhpAEuCLTQiVj2ezj3c6mbgNWHG/1QBsMvNDZvEon7e+uc0SicSpUKiiEVESwJjXWLUajvQx8S9w6xIAXjDjIxEUAIN+SUQizrGlJavSz8QdXur9sm4mfgdgfLdcEPEGM031RAW+R6Pjw7quuwk1l98jMSkEngIY7hH2B0C0mM2ad719fJ/F+fmZqONI9wG60iOcAb6Xy60ttqvv5D2eFIJvAeT+v30vkKf5piRJydYfSccTe4WpVGywUjl5HsAZIjrNzGNEFAU4vKt9I0m0IcuN1+m0VQpKKXDioAa97h+Be02u67r/L+qfik4QLuj5c20AAAAASUVORK5CYII="/></h2>
                    <p>

                        <div className="listItem" style={{marginBottom:"40px"}}
                       >
                        Jun 2016- April 2018<br></br>
                        Class 12 (M.P.C)<br></br>
                        Percentage : 98%
                        </div>

                        

                        <div className="listItem" >
                        Aug 2018 - Current<br></br>
                        Msc Economics Plus Electronics and Instrumentation
                        Bits-Pilani Hyderabad Campus<br></br>
                        CGPA : 7.4
                        </div>                   
                    </p>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" ,scale:1.1}}
                >
                    <h2 style={{ textAlign: "center", marginBottom: "10px" }}><img style={{height:"70px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATxJREFUSEvtlr1OwzAUhc91QGVkQqiBoQtWIvH3AlBWVl6ETozAhljYeAw2ZgovAEKowSwdGjoxsEZVfJElSps2VKocmkrYo3/O52Pde30JJQ0qiYv5Arcf28u9SmUrpVTYvIjHnl5Mkufabu1zVGfMsWrFDRBdAliwgQ7OUg/MxzL0r4f1MmClOj60iIsBZlQYglakrH70ZzPgt1Z3j4nvzSIzNZjSJ5tLEHs7RHxlNIhpfyOsPuSCo6hTFxB3ZlFDHwTBetMGPEkv49iB3VNPG2guuIZjxqWTq1yzqdVKxdvQZPUj/ZbrKXubYbj6kvs7mUn12r0F8+G0xWLyfr6RwdpRbiPwXWXqRFhixkmxYFwASDR0s5/LP3msovczAKcFA0flzmXgG86gyywN/MdOx+Tnq6+ehfv/5/gLGngGLsDvhwIAAAAASUVORK5CYII="/></h2>

                    <div className="imageContainer" style={{display:'flex',alignItems:'center',gap:'10px',paddingBottom:'70px'}}>
                    <motion.img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhRJREFUSEvtl89PE0EUx79vXTfRhsQevOlJuKgJWHYxAtvCRQ8apU0ajfGERBPDyYvxYuTggTtEE+J/oOxWTpiYNUsDJLSAP5p4UEzUo6EcqAl0dx6ZVpLiwVC6m3LoXCfzPvO+8503bwhNGtQkLg4HeMUZOuGp6ApDBdXD6oVBe2M39p6Ml+aGBgjkhAFm8KBh2u9b4IoCLamDNFnLXK17vN/Ktaab1hnHGVDb1GhZmpAYSx57Ny8mZr4XCmntz7p3i4AXAI7J+aDM9U03rfYa8JYQoqMnkfm56KROHVFJM8zXazk3NQLiqdDAzFgw4lbvsps+Kcj78fcaPgLwFEA0NDCAgm5a55lB+WzqIYAxgCO1dSAsqUEQ17vNzIyELbs3zvqK8pgYd3bhoYEBbIIwdrRUet555W2pWvuTwwS8DE5qpq96fLqj1tU1shaZ+InRb09U4G5yngiXGsm4yIwvMgiAvG5a+ofZy5Hy8cgmgA0QnkHQfRC3S6AQoq8nkZnPZZNTYIwcFPzL19Dl+yprfvmBwliIxe13OTcVA3GemdJGfPqVbJ18VbnLJLb0PntSbiCfTX4CcO6gYNkVjnabViWYHB/nrka3ock2qRNAkYDbsX5rlggs56v9mzJO4HtBnPFnEDvMyjqBhwGc/ufp/E3AG65Wq2sA2oJ2dd1P9X+lblp7W3caDSw4HD+JBhKoe+kO7cdgLiHEl5QAAAAASUVORK5CYII=" initial={{rotate:0}}
                    animate={{rotate:360}}
                    transition={{repeat:Infinity,
                        repeatType:"reverse",
                        duration:6
                        }} whileHover={{scale:1.2}}/>
                    
                    <motion.img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABTxJREFUSEvlll1sU2UYx//P2zPYGLCABL1TMcQoxEl7Kh9q1AABerq1p7AaGIGASoQtYiKZBD9CNEE3iQkIyocRCep0tT3d1p4hXswERVlPBxcukkDwysn4EIiWja19H3OWdWnDNmJvIPG9Oel5n/5/7/mf5+MQ7tCiO8TF3QvW49ZWAO8C6AH4GLPYG/W6krlO+eLWXAFsAmERGNOZ+I2ox90wlptjPrG/rXMhSdmUcdBcIZkBriWmjSDaWd7hfLvbm3Rc6sH7AGqYsccB/hisOKTInJRMvmav6/ho8DHBetz6hIDLEU19KytQ2ZZ42CEpxMQXiUURiCcKyVVhr/t8NkY3rQ9YgqJedUth4JgVAjhseN1f5wpUfW+Vpfv5AkAyk+67r8X31N+5+4G49SKAJyOauq4wsJlsJJZmRHMfyRXQTetzBk0llgqBuiOaaoOGlx5P1oC53PCqGwoC+2PWO4KgRDR1W1bAbybqiGmdkup3Xi8rFRMHBk5Lwp6opu4atjpu7QKj2/Cq9QWBfWbH84LFTjAdA/FMZswmwpSRxfgvgLrAdBaClzJQE/Wo0f8EDpiJFcx4AUwqCFMBNDChnRgHCPxeRHPvz7fWehnARukQr1GGFxPzFoCvgkQHEx8Y6QB5WR2Id97PkGEAk8DYodwoaUxP7AuxRIgIZQCvNjR1vg2taDn5oH1trZz7O5jJb1odYOwjUJqIKnppcnUxrlWDaSsYPZlMekWLb15P9sDD4MrmHyc5lOIOYtr/mOXcvX07STso0JrU2YFaMD8qICrCmtPS7XcIvDIkstvQ1M2+WMcCQSIMwjkG74h63G32flVTk2OgdEYdAcE+KpvX5pl5074/DNbNxBqAvIZHDebauMGyii714DqBfoporsXLj56eJTPpX3NjhEOZHV76eJceT/7AYLUodb4sFAxm8ish2UyQRyIe97d5YH8suZpI6obmXp5Xs01d49KlvdfAfMLwuhctNxNzJFNnHpjYGfa4T+kxqx2EJ/qobGr2ybJxgbhlAAhFNPWrPPCQ1ScBPlieUHdlrdbNxHow1hLIJZmesfu0HrfsP68cEm00NHVVwEzOY+ZWMM6A6DNDcx3KWp2eMGMLCNUppWj+sSXlqTyw/cPfduoBkpkoGAoR1ztSE75Jl/bGCLAbxhSQrDY87gV2rC+WfNq+DvbjoeQSLL5k8FUWWHkTZb6h5LJ7wIVMWgRbfM7uW5Jr2DpmCrR1BiV4HTGcAO4hoJ5JfgcWDSD61PC4DuZa7W9N1BJRDQtsBtNCgl1OuAKQRRIHIxUu2+a8NeaQ8JnJCgHeB0lH7QYC8CyA7Lq+dRGugLkLLM7ZDUQSv9S8zG2OGJub1SMF+OPWmyBMj3rUbOlgqGWuIjmwXopiScgcBnDY0NQPhxMplvyIif8wNNUemaOcc7QdAHrM+oKIj9/SqWJWiIjHM6MIQlwzPK5sog2qDQ4JSJehudcXBjatJmY2opq7MVfArgBFKb7IAFJK0bRspmZj9Ji1lokWRjXXmsLAMesACGdybVxmnh1fwtf3SsZDBCgAflNulNSGgrP6sxD7FREwzdDUVwsCB+LWKgbqlFT//FBwQa8eT/gAaiAg7EidH/wqGZgwo54IHoDqDM0Vq2o6UZIuHddJzK9HvO6WgsDPtrcrU25MsmfqMmBwSv0JKTYZFc6fcwUDMes5JuwZHC7APyC0lHe4tmWb0MhFMEZyZbcqm3+5t0iMnxyumHN21HBm8rWdekQ4HJeNJeUXbyd7935X3+7khe7//574X85wTD1FfqLsAAAAAElFTkSuQmCC"
                    initial={{rotate:0}}
                    animate={{rotate:360}}
                    transition={{repeat:Infinity,
                        repeatType:"reverse",
                        duration:6
                        }}
                    whileHover={{scale:1.2}}/>
                    
                    
                    <motion.img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABDNJREFUSEvFln9oVWUYxz/PuefetjnbVihZ2j9RoGLL7UxNin5AhZRu97qzURFKJdGP2a9N00gMjNYgCv0nzYkhJt07770xYiDFsATF7p0k+EeIQZQGWanbmrqde544d7t1tDs9E8Xz3+G85/m8z/O87/P9CtfpkevE5YrAizOLy0oxbVfR8+J0dVvdQxNNYGJgRRoz0WdEeB+4dQx2QpU1XVZqB4IG3UBgsN0XvReXTUAtMCjKOoSIwjqgDNUMIVmZqEntDwK/LDh2IDbdMLVD4Ekgp/BpGOedXVb3Hx4g+kN0aniYdhWWjwJ1Vw6jNWklf7vUBsYF5/uo4VUqugooRdjr5oyXd8/bfaRYwOa+aLXrymbQ+cCQinaU91d+sP2h7eeKrS8KbsxGnxalHZgOHFPlza661JdBSmhnY82o2wFyO/CLqK6O16V3Xfzv/8B2Jvox8CrQD7xbxZRNW6wtI0GghTXLe5eXDE3ub1N0jVctFT7qqk294Y9xAXjR0UU3lJ8p+Rv4zsSxC32cCNS/NpaJTQuhaaCaUvPGxOzEcOH7BeCnDj9eNTIc+UvQD+NWutUfpDEbe03QhsjIuSU7F/T0N2br7xc1VgI1wG0gJ0CPCNoZt9IeLP80ZaOfqPJCODJ80+d3f3VqwmA7E9sK+lzOkRmhiM7A5VvABPYh5FBCgAWUKLKiy0puDQxuONRQGc7JqWIZ+8Gm6a5R5CVBo/7smrPRma5yCDiasFJz/OCRkFal56ZPF804KDgUZjWqrwi8qMPmZ4mFibP/lbahCdeYFa9Lrg8MvlSP/RmHI3qz67IXqPCGCvAz6FGBYyj7KmVqV+EmXNUeJxckfx2tDssEqVG4A7gLmDI6vPhmtlX96HpZ7wYCBy21GeJ5cH+8eDDYB+1bCDnbUBYJ8nDcSvYWwFenx6YezpfYMGclahIn/dfOzsY25fuvxiPxut1fBwIH7bEZpkU1P8N/F6QTJT8Y1NAHUR4A+gYrzi3subPn/FUtdXJ+8ridjb4ONI/dXWMs6xwqnY6ra1PzU38GPtX2ETvCWWcIYZ/jsLTwsxfAf6q9w1UorzdmywbK5hg4Q5POVP3kVyPfyLyHUnPyuCMzv8NMw0ZFWoBTAmvjtanN9n67hEiuF3TepIGKsvGkzi8Sg5NPtwqy1hOJYgNpPFmMibIBmOnJYt5hwDRgT8JKPXYp0RiTVM8azQCOi2pbIFn8N6giTX31T6iGYqBLPMUCc1nCSpwpBl76/dK5hrgbgfsAb5K1Txqo6JiQERgvo8aD9QsxQrWl4cFtO6r3ePKJd3c15LwnyrPeu8BOB2m7YutzMXzsoHSPmb2TAhsQKVfVtwtmzzCMli9qkweC6Pdlzd4FQYrb2+Mi+la8Jr3zmthb/wY8I1hCaIUgehZn67U39EFqGHDNxEodMGiQZf8AxhlhPUWh21QAAAAASUVORK5CYII=" initial={{rotate:0}}
                    animate={{rotate:360}}
                    transition={{repeat:Infinity,
                        repeatType:"reverse",
                        duration:6
                        }} whileHover={{scale:1.2}}/>
                    
                   
                    <motion.img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA3hJREFUSEvFlkuIFEcYx/9fj+sEV9fHXoLG13b1sBokHuLFR9RTEB+w4JMEBRUWH3lJjNOjhgmG6QElq+KqiHjxIoooHnzgI1EPgo+jiFM9rrhmkZDDhhB1k5n5pNrtpV8707M5bJ2qvqr6fvX/vq+7ijBMjYaJiyGBmUG2JZZrpL3WzcKNoRy+bjCfRaJYNM4BaFNABk6JtNxMpLrxW13gINTFKLhhyk3xsagv1F25VGuZ+D6AMUEIgY7qZmFbXHgsxT3ZiaPeJEftbOmz99kNYjZpdAvA2P8DrwlW0NfJxmsA5gN0Wk8XNtiWmEFEdwA0B+HMOGZk5NZayquC3yttvMLAZ64jYu7UM/Z2NbYtXTC0DgKWBUCHhCm/rQYfFNyv9DKAhWFVPNfI2PeUvctqnVZGuSsi7B26WdgxGDwSHKXU64A0bY6+6+lDZSvmW8YyEs/BGBeCEA6ItNwZBQ+B+5VeBbCgSqies8YL/n2T/GMmHpfspPiEiG5FwoH9wpQ/hCPisfgLqUZ5MLWVK3iQSMASZmG9zIuPibW7AI8PpYZw0EjL73xRcwdd2WkflJMNSmkop5FHYGrjROUhVagb/aqe/Tx9KmsjZjGwHYTPffuYcyJj7x4oUrcjLbGVQJ21PoOBeT8YIFon0oUzav7X7KIRU5K/9zLQ6PXHzIuMjH1b2QZybFupNQA7G2O1IJjxjcjIwy54crKnG+AP/b6oXZiFEz6wGth5Yz8Y3w8JDLxgjecZu+yXMpf6iYh/9Pkh3Owd37Tk0/ZH/4XAyiDzRgcxqn78jsOg4iqnZcZ1jOblxtd2XyjH3n1FK/ULg31VGKjIf8oVzNdGVnpQ0l55Uxbm09XeCWNWuEqrgh3lOeMoEbZECSFgi27K4+/XiZVEpO7nUFNK/2puWhqERobau9vOGYdB+CrosVTSWlr3PnV+k09yrc0NVP4zgnupd0LTyihoTbBaUMyJI0wUvGdPCFO2OwWZM/aBsMdfSHyx++1HqxZnfysNlvqa16IDt1KdDA5edeqt9bf7BHIBDJx/2TdpbTVoLMVOAavHXd44ScDGKsWrpi50901aXQsaGxwTfkHX5SpajXKNwznTsUI9EMbBldcFrRvsUX6agC+cAzHO6EJ+GVepK6Iuxd4QOpcKUUJ/Kzspi0qc8HrXDBlcLyi4ftjA7wAXo10uf8IR7gAAAABJRU5ErkJggg==" 
                    initial={{rotate:0}}
                    animate={{rotate:360}}
                    transition={{repeat:Infinity,
                        repeatType:"reverse",
                        duration:6
                        }}
                    whileHover={{scale:1.2}}/>
                   
                    
                    <motion.img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAotJREFUSEvF1k1o02AYB/D/k7azHeuH3akwxIMMt6ZO0IMOPxBh7OJBRUURPKigc0ibTj2IMPBqU+kcbAe9yHAoCl4UEWQHxY/LYH276cmDIooems4J2iaPROZow7BJzbocH978f3mSvE9CWKWDVslFw/Da693rjLLXo12Yed/IxTcGj2/xRRZ+TplgsaNrFw7f053iDcFhVR4FMGBixDRaTOcHVxyOqPJ+Bh5UQww+WlIKk05wRx1Hc5s69IoxCyBoQeahSz1OnrcjOKwmHgPcv1xnTHheSomddru2DUfV7rgOSfwrmCXuLyULT+zgtuFwVp4E40id0ClNEXtcg4M3NrZLv7yfAXjrhHJFQmwhKb7Uw211HFLjAwQyt1D1UTF3EwBPTZXpjJbOj7sCR1T5NgPHLWFFABKAUC2MW1panHQLfsFAryXsAwFeBmK1dXqmKfm9rsBhVZ4BkLCEzQHsAajTUn+lKWK7W/BLANssYW8AtADYXFMnPNVSos8t+D6AA9ZbysQtxNhhQW5qijjlChxSE4MEHrHM54cEaY11kjHxsVKqcMcVuDXbFfOx51N1GDEmmOAHcLCqXvaVy+3fLr2bdwU2Q5aZ02MMChD4xBLC9raSud7WADEXBjM9nRLpb5fOYVwjUICJzy3CP3Svb/3389Nf63XrCDYXR9T4CIP+fPSZMEwGtYL44mLQUFERGTuoYxh3D3nCH+ceAegjYMgABwh0FcCYpoizdlHnMIBobkNIr/inCcgxow2EXq0k9mEYxorCZrj5h6mzNEEGDC0tdjsB/661/XJZw0PZRJYMbtPS4nRT4XBGvkxE/qKSv9JcWJW3smR4SsnZ102FG8FqJt//BjR6/m9madQfTArz1QAAAABJRU5ErkJggg==" 
                    initial={{rotate:0}}
                    animate={{rotate:360}}
                    transition={{repeat:Infinity,
                        repeatType:"reverse",
                        duration:6
                        }}
                    whileHover={{scale:1.2}}/>
                    
                    <motion.img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABA9JREFUSEvtVl1oHFUU/s6d3W12Z7aNSdbsTFsxlZB2Z3dLVAytICL1QYlKpAYsKELwB/Wp1iJiX0SIyZOgvhSLVOhDCw2CSNXWBw20lGpjszvb1CqhbbqzadIkZnd2m2zmHpnFQGp+mtRiX3JfBoYz9zvn+7lzCXdp0V3CxSrw/8b8KtUVqrMZ7TFyuYWJJ1zyHd1oTo7ZlhYjl5Vo0kl5NSOZkD7jiqbo+UIvtcO9chJBX1hrmckXTm/cjtJwat0DLs08A+KSIv0n6hN//TlXx3lU22nVAkOCMA4gCUBCcR9kV3mdgLeiplNNBGlbajcY7wopt9cnS6dylrqLGYfIdTexz7cXzG8AsBiYISBWWOOEGxsxNQs+D3joXHDDhq2lIa/Am8K/Vs0y4Qvhyh4pxEmW/LCRLP5qp0O9gDAA3q/HnS47HfoUoCf0uGPaaXUChP266exdzK0Lmss+q0Xgh0nM11ngCIDfoqazK2ep42B8FB11PslF1DwY+0DwwJ620+oZZhw3Es77ubTax0ANiPYEAoHvaxvHJv/dwE3AzKBcJvQ5QK8wcx+BAgAeAnBYjzsv2mn1IIB7hJSdUogukNwDph8La4p12pSaB/hRPV48Y5+vuh9S+RiMNgB+Bh0w4oVXF9XYTmntID7s6RTdemPQK7QtdQCMvgqwpe0Eyy/B9CETavQRZ19lctA7AH+gxx1j7uaDfdXVVYFyBxjdIG7VzeKxBTXOptSXiPCVQtDvNZ1czgo9x0w9IBzTTac1+wtCVKVOAHyJgN3RePEbO6X+BOL1IPygm8U3vY1z/Wpi1v3XrIjmcnEUTC/riYInW2XdRPU/Rb8DVALYc6DDwEUCtulxp6EStZR6nAg72C8iRlN+NJtWOwl4jwlPGabzHTNEzlLLIEwR81kGbfJ8OjPpPO7FbFFXZy+E62ia44oQQ5HYpJc9GvujRlvIIIs5NneuqgE+kZCMJJEYiMYKR4nAS+b4Th/WIwN14XK52DQuiv2miel5Ew/3B7e5PsVvxAo/3wnw6xdr1k5P3egEaAvAfoCambDTk2OexralvU3MHUx0wKdUHYxsHs3/1yaGU2pS+IOD5XKpR1HQVR9zTswD9l5ctULNgulrALUEOgTJn806dLlN2FbwEWbRRuAXAJrkabeNAsopEO3QzUJmQeDZo9K3TusAeDcYDQRMSMCL0GUvSmC6DNAlCZ4QAutZskHek4VB4GYA9wHoBXGnl93hlPqkS9Sum4XXZk225P/Yi8ZwJtTKTM8DeNY7tW45NeFbJuqe65Vsf3iznshfmOvsZV8E+AiUa1vCLVKwwZA1AlTLEmUSyLJLV10/2TyevzI3q0s1uWzgW066woJV4BUSdvvlq1TfPncr/PJvhXXELsVOc3MAAAAASUVORK5CYII="
                    initial={{rotate:0}}
                    animate={{rotate:360}}
                    transition={{repeat:Infinity,
                        repeatType:"reverse",
                        duration:6
                        }}
                    whileHover={{scale:1.2}}/>
                    </div>
                    
                    
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;