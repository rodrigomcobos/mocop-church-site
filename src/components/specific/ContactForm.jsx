import React from 'react'
import Img from '../../assets/images/churchimg45.jpg'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { FaMapLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactForm = () => {
    const position = [33.007460, -96.993690]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto my-16 sm:my-24">
                <motion.div
                    className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4"
                    variants={containerVariants}
                >
                    <motion.div
                        className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-footer">Estamos Aqui Para Ouvir e Ajudar!</h2>
                        <p className="text-sm text-gray-600 mt-4 leading-relaxed">Seja para tirar dúvidas, solicitar informações, ou compartilhar suas necessidades de oração, ficaremos felizes em receber sua mensagem. Nossa equipe está comprometida em atender você com carinho, orientação e suporte espiritual.</p>

                        <motion.form
                            id='contact-form'
                            className="mx-auto mt-8 bg-primary rounded-lg p-6 shadow-md space-y-4"
                            variants={itemVariants}
                        >
                            <motion.input whileFocus={{ scale: 1.02 }} type='text' placeholder='Nome'
                                className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none" />
                            <motion.input whileFocus={{ scale: 1.02 }} type='email' placeholder='Email'
                                className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none" />
                            <motion.input whileFocus={{ scale: 1.02 }} type='text' placeholder='Assunto'
                                className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none" />
                            <motion.textarea whileFocus={{ scale: 1.02 }} placeholder='Mensagem' rows="6"
                                className="w-full rounded-md px-6 bg-white text-sm pt-3 outline-none"></motion.textarea>
                            <motion.button
                                type="button"
                                className="btn mx-auto w-full"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Mande sua mensagem
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    <motion.div
                        className="z-10 relative lg:col-span-2"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={Img} className="w-3/4 object-contain block mx-auto rounded-lg" alt="Church" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 my-24 px-4"
                    variants={containerVariants}
                >
                    {[
                        { icon: FaMapLocationDot, title: "Endereço", content: "2345 State Hwy 121, \nLewisville, TX 75067" },
                        { icon: FaPhone, title: "Telefone", content: "+1(214) 677-6646" },
                        { icon: FaEnvelope, title: "E-mail", content: "lewisvillemocop@gmail.com" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <item.icon size={34} className="text-bottomBar" />
                            <div className="mt-4 text-center">
                                <h4 className="text-footer text-xl font-bold">{item.title}</h4>
                                <p className="text-sm text-gray-500 mt-2">{item.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 px-4"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold text-yellowBtnHover mb-4">Nossa Localização</h3>
                    <div style={{ height: '450px', width: '100%' }}>
                        <MapContainer center={position} zoom={18} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    2345 State Hwy 121, Lewisville, TX 75067
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ContactForm