import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const translations = {
    pt: {
        title: "Perguntas frequentes",
        email: "lewisvillemocop@gmail.com",
        faqItems: [
            {
                question: "O que é dízimo?",
                answer: "O dízimo é uma prática de generosidade que remonta às Escrituras Sagradas e é considerada uma forma importante de adoração. Em essência, o dízimo consiste em destinar 10% da sua renda a Deus, como reconhecimento de que tudo o que temos e somos vem Dele. Essa contribuição não é apenas um ato financeiro; é um reflexo da nossa fé e confiança em Deus como nosso provedor."
            },
            {
                question: "Por que é importante dar ofertas?",
                answer: `Na Bíblia, encontramos diversas passagens que falam sobre a importância do dízimo, como em Levítico 27:30, que diz: "Todo dízimo da terra, seja dos grãos da terra, seja do fruto das árvores, é do Senhor; é coisa consagrada ao Senhor." Essa consagração nos lembra que nossos recursos materiais são uma dádiva de Deus, e dar o dízimo é uma forma de honrá-Lo. Além disso, o dízimo nos ensina a priorizar Deus em nossas finanças e a confiar que Ele cuidará de nossas necessidades. É uma prática que promove o crescimento espiritual e nos ajuda a desenvolver uma mentalidade de generosidade. Ao dar o dízimo, não apenas apoiamos a obra da igreja, mas também nos tornamos parte de algo maior, contribuindo para a edificação do corpo de Cristo e para a expansão do Seu reino. Assim, o dízimo é uma maneira de demonstrar nossa obediência, gratidão e compromisso com Deus, além de ser uma oportunidade de experimentar as bênçãos que Ele promete àqueles que se dispõem a dar com alegria.`
            },
            {
                question: "Como os dízimos e ofertas são utilizados pela igreja?",
                answer: "Os dízimos e ofertas recebidos pela nossa igreja são fundamentais para manter as operações diárias e apoiar os diversos ministérios que servem à nossa comunidade. Uma parte significativa é destinada ao pagamento de despesas essenciais, como contas de luz, água e aluguel, garantindo que a igreja funcione de maneira adequada. Além disso, esses recursos financiam programas de assistência social, eventos especiais e ações missionárias, promovendo o crescimento espiritual e a edificação da fé entre os membros da igreja. Ademais, as ofertas também são utilizadas para apoiar missionários e ministérios externos, permitindo que a obra de Deus se expanda além das paredes da nossa congregação. Cada contribuição é cuidadosamente administrada para que possamos realizar nossa missão, impactar vidas e compartilhar o amor de Cristo. Agradecemos a cada membro que contribui generosamente, pois sua participação é vital para o crescimento e sucesso da nossa obra. Juntos, fazemos uma diferença significativa no mundo ao nosso redor."
            },
            {
                question: "Como posso começar a dizimar e ofertar?",
                answer: "Começar a dizimar e ofertar é um passo significativo na vida cristã e envolve um compromisso pessoal com Deus. A primeira coisa a se considerar é a intenção do seu coração. Dízimos, que correspondem a 10% da sua renda, são uma forma de reconhecer a soberania de Deus sobre sua vida financeira, enquanto as ofertas representam sua generosidade e gratidão por tudo o que Ele tem feito. Para começar, você pode estabelecer um valor que se sinta confortável em contribuir, respeitando a sua situação financeira. Muitas pessoas optam por destinar seus dízimos e ofertas mensalmente, com base em sua renda. É aconselhável separar essa quantia logo que receber o pagamento, para que se torne uma prioridade em seu orçamento. Além disso, a oração é um aspecto fundamental; busque a orientação de Deus sobre quanto e como contribuir. Se estiver em dúvida, converse com um líder da igreja ou participe de grupos de discipulado que abordem a importância da generosidade. Lembre-se de que cada contribuição, por menor que seja, é valiosa e faz parte de uma missão maior de servir e ajudar aos necessitados."
            },
            {
                question: "Qual é a diferença entre dízimos e ofertas?",
                answer: "Dízimos e ofertas são duas práticas importantes na vida financeira de um cristão, mas cada uma possui um propósito e significado distintos. O dízimo refere-se à prática de dar 10% da sua renda como uma forma de honrar a Deus e reconhecer Sua soberania sobre todas as áreas de sua vida, incluindo as finanças. Essa prática é fundamentada em passagens bíblicas, como Malaquias 3:10, onde Deus nos convida a trazer os dízimos à casa do tesouro. O dízimo é considerado um mandamento, e seu objetivo é sustentar a obra da igreja, apoiar os ministros e ajudar em atividades missionárias. Por outro lado, as ofertas são contribuições voluntárias que vão além do dízimo. Elas podem ser dadas em qualquer quantia e a qualquer momento, com o propósito de expressar gratidão, apoiar projetos específicos, ou ajudar aqueles que estão em necessidade. As ofertas refletem o coração generoso do doador e podem ser direcionadas a causas específicas, como missões, assistência a comunidades carentes, ou eventos da igreja. Enquanto o dízimo é uma porcentagem fixa, as ofertas são flexíveis e podem variar de acordo com a capacidade e a vontade de cada pessoa. Ambas as práticas são fundamentais para a vida cristã e contribuem para a construção do Reino de Deus na Terra."
            },
            {
                question: "Como posso obter mais informações?",
                answer: "Nossa equipe financeira está feliz em se reunir com os membros para discutir nosso orçamento e responder perguntas relacionadas a finanças. Envie um e-mail para lewisvillemocop@gmail.com e deixe-nos sentar com você para responder as suas perguntas."
            }
        ]
    },
    en: {
        title: "Frequently Asked Questions",
        email: "lewisvillemocop@gmail.com",
        faqItems: [
            {
                question: "What is tithing?",
                answer: "Tithing is a practice of generosity that dates back to Sacred Scripture and is considered an important form of worship. In essence, tithing consists of dedicating 10% of your income to God, as acknowledgment that everything we have and are comes from Him. This contribution is not just a financial act; it is a reflection of our faith and trust in God as our provider."
            },
            {
                question: "Why is it important to give offerings?",
                answer: `In the Bible, we find several passages that speak about the importance of tithing, such as in Leviticus 27:30, which says: "Every tithe of the land, whether of the seed of the land or of the fruit of the trees, is the Lord's; it is holy to the Lord." This consecration reminds us that our material resources are a gift from God, and tithing is a way to honor Him. Furthermore, tithing teaches us to prioritize God in our finances and trust that He will take care of our needs. It's a practice that promotes spiritual growth and helps us develop a mindset of generosity.When we tithe, we not only support the church's work but also become part of something greater, contributing to the edification of Christ's body and the expansion of His kingdom.Thus, tithing is a way to demonstrate our obedience, gratitude, and commitment to God, as well as an opportunity to experience the blessings He promises to those who give joyfully.`
            },
            {
                question: "How are tithes and offerings used by the church?",
                answer: "The tithes and offerings received by our church are fundamental to maintaining daily operations and supporting the various ministries that serve our community. A significant portion is allocated to paying essential expenses, such as electricity, water, and rent, ensuring that the church functions properly. Additionally, these resources fund social assistance programs, special events, and missionary actions, promoting spiritual growth and the edification of faith among church members. Moreover, offerings are also used to support missionaries and external ministries, allowing God's work to expand beyond the walls of our congregation. Each contribution is carefully managed so that we can fulfill our mission, impact lives, and share Christ's love. We thank each member who contributes generously, as your participation is vital to the growth and success of our work. Together, we make a significant difference in the world around us."
            },
            {
                question: "How can I start tithing and giving offerings?",
                answer: "Starting to tithe and give offerings is a significant step in the Christian life and involves a personal commitment to God. The first thing to consider is the intention of your heart. Tithes, which correspond to 10% of your income, are a way to acknowledge God's sovereignty over your financial life, while offerings represent your generosity and gratitude for everything He has done. To begin, you can establish an amount that you feel comfortable contributing, respecting your financial situation. Many people choose to allocate their tithes and offerings monthly, based on their income. It is advisable to set aside this amount as soon as you receive payment, so it becomes a priority in your budget. Additionally, prayer is a fundamental aspect; seek God's guidance on how much and how to contribute. If in doubt, talk to a church leader or participate in discipleship groups that address the importance of generosity. Remember that every contribution, no matter how small, is valuable and part of a greater mission to serve and help those in need."
            },
            {
                question: "What is the difference between tithes and offerings?",
                answer: "Tithes and offerings are two important practices in a Christian's financial life, but each has a distinct purpose and meaning. Tithing refers to the practice of giving 10% of your income as a way to honor God and acknowledge His sovereignty over all areas of your life, including finances. This practice is grounded in biblical passages, such as Malachi 3:10, where God invites us to bring the tithes to the storehouse. Tithing is considered a commandment, and its purpose is to sustain the church's work, support ministers, and help in missionary activities. On the other hand, offerings are voluntary contributions that go beyond tithing. They can be given in any amount and at any time, with the purpose of expressing gratitude, supporting specific projects, or helping those in need. Offerings reflect the donor's generous heart and can be directed to specific causes, such as missions, assistance to needy communities, or church events. While tithing is a fixed percentage, offerings are flexible and can vary according to each person's capacity and willingness. Both practices are fundamental to the Christian life and contribute to building God's Kingdom on Earth."
            },
            {
                question: "How can I get more information?",
                answer: "Our financial team is happy to meet with members to discuss our budget and answer finance-related questions. Send an email to lewisvillemocop@gmail.com and let us sit with you to answer your questions."
            }
        ]
    },
    es: {
        title: "Preguntas Frecuentes",
        email: "lewisvillemocop@gmail.com",
        faqItems: [
            {
                question: "¿Qué es el diezmo?",
                answer: "El diezmo es una práctica de generosidad que se remonta a las Sagradas Escrituras y se considera una forma importante de adoración. En esencia, el diezmo consiste en destinar el 10% de tus ingresos a Dios, como reconocimiento de que todo lo que tenemos y somos proviene de Él. Esta contribución no es solo un acto financiero; es un reflejo de nuestra fe y confianza en Dios como nuestro proveedor."
            },
            {
                question: "¿Por qué es importante dar ofrendas?",
                answer: `En la Biblia, encontramos varios pasajes que hablan sobre la importancia del diezmo, como en Levítico 27:30, que dice: "El diezmo de la tierra, ya sea del grano de la tierra o del fruto de los árboles, es del Señor; es cosa consagrada al Señor." Esta consagración nos recuerda que nuestros recursos materiales son un regalo de Dios, y dar el diezmo es una forma de honrarlo. Además, el diezmo nos enseña a priorizar a Dios en nuestras finanzas y a confiar en que Él cuidará de nuestras necesidades. Es una práctica que promueve el crecimiento espiritual y nos ayuda a desarrollar una mentalidad de generosidad. Al dar el diezmo, no solo apoyamos la obra de la iglesia, sino que también nos convertimos en parte de algo más grande, contribuyendo a la edificación del cuerpo de Cristo y a la expansión de Su reino. Así, el diezmo es una manera de demostrar nuestra obediencia, gratitud y compromiso con Dios, además de ser una oportunidad de experimentar las bendiciones que Él promete a quienes se disponen a dar con alegría.`
            },
            {
                question: "¿Cómo utiliza la iglesia los diezmos y las ofrendas?",
                answer: "Los diezmos y ofrendas recibidos por nuestra iglesia son fundamentales para mantener las operaciones diarias y apoyar los diversos ministerios que sirven a nuestra comunidad. Una parte significativa se destina al pago de gastos esenciales, como electricidad, agua y alquiler, asegurando que la iglesia funcione adecuadamente. Además, estos recursos financian programas de asistencia social, eventos especiales y acciones misioneras, promoviendo el crecimiento espiritual y la edificación de la fe entre los miembros de la iglesia. Asimismo, las ofrendas también se utilizan para apoyar misioneros y ministerios externos, permitiendo que la obra de Dios se expanda más allá de las paredes de nuestra congregación. Cada contribución se administra cuidadosamente para que podamos cumplir nuestra misión, impactar vidas y compartir el amor de Cristo. Agradecemos a cada miembro que contribuye generosamente, ya que su participación es vital para el crecimiento y éxito de nuestra obra. Juntos, hacemos una diferencia significativa en el mundo que nos rodea."
            },
            {
                question: "¿Cómo puedo empezar a diezmar y ofrendar?",
                answer: "Comenzar a diezmar y ofrendar es un paso significativo en la vida cristiana e implica un compromiso personal con Dios. Lo primero a considerar es la intención de tu corazón. Los diezmos, que corresponden al 10% de tus ingresos, son una forma de reconocer la soberanía de Dios sobre tu vida financiera, mientras que las ofrendas representan tu generosidad y gratitud por todo lo que Él ha hecho. Para empezar, puedes establecer una cantidad con la que te sientas cómodo contribuyendo, respetando tu situación financiera. Muchas personas optan por destinar sus diezmos y ofrendas mensualmente, basándose en sus ingresos. Es aconsejable separar esta cantidad tan pronto como recibas el pago, para que se convierta en una prioridad en tu presupuesto. Además, la oración es un aspecto fundamental; busca la guía de Dios sobre cuánto y cómo contribuir. Si tienes dudas, habla con un líder de la iglesia o participa en grupos de discipulado que aborden la importancia de la generosidad. Recuerda que cada contribución, por pequeña que sea, es valiosa y forma parte de una misión mayor de servir y ayudar a los necesitados."
            },
            {
                question: "¿Cuál es la diferencia entre diezmos y ofrendas?",
                answer: "Los diezmos y las ofrendas son dos prácticas importantes en la vida financiera de un cristiano, pero cada una tiene un propósito y significado distintos. El diezmo se refiere a la práctica de dar el 10% de tus ingresos como una forma de honrar a Dios y reconocer Su soberanía sobre todas las áreas de tu vida, incluyendo las finanzas. Esta práctica está fundamentada en pasajes bíblicos, como Malaquías 3:10, donde Dios nos invita a traer los diezmos a la casa del tesoro. El diezmo es considerado un mandamiento, y su propósito es sostener la obra de la iglesia, apoyar a los ministros y ayudar en actividades misioneras. Por otro lado, las ofrendas son contribuciones voluntarias que van más allá del diezmo. Pueden darse en cualquier cantidad y en cualquier momento, con el propósito de expresar gratitud, apoyar proyectos específicos o ayudar a aquellos que están en necesidad. Las ofrendas reflejan el corazón generoso del donante y pueden dirigirse a causas específicas, como misiones, asistencia a comunidades necesitadas o eventos de la iglesia. Mientras que el diezmo es un porcentaje fijo, las ofrendas son flexibles y pueden variar según la capacidad y la voluntad de cada persona. Ambas prácticas son fundamentales para la vida cristiana y contribuyen a la construcción del Reino de Dios en la Tierra."
            },
            {
                question: "¿Cómo puedo obtener más información?",
                answer: "Nuestro equipo financiero está feliz de reunirse con los miembros para discutir nuestro presupuesto y responder preguntas relacionadas con las finanzas. Envía un correo electrónico a lewisvillemocop@gmail.com y permítenos reunirnos contigo para responder tus preguntas."
            }
        ]
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const GivingFaq = () => {
    const [openIndex, setOpenIndex] = useState(1);
    const { language } = useLanguage();
    const texts = translations[language];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <section className="space-y-4 max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-3xl font-extrabold text-yellowBtnHover mb-8"
                    variants={itemVariants}
                >
                    {texts.title}
                </motion.h2>
                {texts.faqItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-lg ${openIndex === index ? 'bg-primary ring-2 ring-yellowBtnHover' : 'hover:bg-primary hover:ring-2 ring-yellowBtnHover'} transition-all`}
                        variants={itemVariants}
                    >
                        <button
                            type="button"
                            className="w-full text-base font-semibold text-left py-5 px-6 text-black flex items-center"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="mr-4 text-lg">{item.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-auto shrink-0"
                            >
                                <FaChevronDown />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pb-5 px-6"
                                >
                                    <p className="text-sm text-black">{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    );
};

export default GivingFaq;