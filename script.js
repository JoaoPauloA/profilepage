const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
 // delay: 0.5,
  duration: 0.3,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
 // delay: 0.4,
  duration: 0.3,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
 // delay: 0.4,
  duration: 0.3,
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
 // delay: 1.4,
  duration: 0.3,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
 // delay: 1.8,
  duration: 0.3,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
 // delay: 2.8,
  duration: 0.3,
});
// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
 // delay: 3,
  duration: 1,
});

document.addEventListener('DOMContentLoaded', () => {
    const centralNode = document.querySelector('.central');
    const peripheralNodes = document.querySelectorAll('.peripheral');
    const centralNodeRadius = 50; // Raio do nó central (100px / 2)
    const peripheralNodeRadius = 35; // Raio de cada nó periférico (70px / 2)
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');

    const nodeContents = {
        1: {
            title: "Ciência, Tecnologia e Inovação ",
            text: `
            <p>As propostas para ciência, tecnologia e inovação visam posicionar Fortaleza na vanguarda do 
            desenvolvimento tecnológico e sustentável. Através da promoção da pesquisa, capacitação, inclusão 
            digital e governança eficiente, Fortaleza estará preparada para enfrentar os desafios do futuro e 
            melhorar a qualidade de vida de seus cidadãos.</p>

            <div class="subtopic">
                    <div class="subtopic-title">1. Centro de Inovação e Tecnologia:</div>
                    <p>
                        <li>Criar um Centro de Inovação e Tecnologia que reúna startups, empresas de tecnologia, universidades e instituições de pesquisa para fomentar a colaboração e o desenvolvimento de soluções inovadoras.</li>
                        <li> Oferecer infraestrutura de ponta, como laboratórios de pesquisa, espaços de coworking e fablabs, para apoiar empreendedores e pesquisadores em seus projetos.</li>
                    </p>
                </div>
                <div class="subtopic">
                    <div class="subtopic-title">2. Capacitação e Formação:</div>
                    <p>
                        <li>Implementar programas de capacitação em tecnologias emergentes, como inteligência artificial, blockchain, big data e internet das coisas (IoT), para estudantes, profissionais e servidores públicos.</li>
                        <li>Parcerias com universidades e instituições de ensino para oferecer cursos de extensão, workshops e treinamentos voltados para a inovação tecnológica.</li>
                    </p>
                <div class="subtopic">
                <div class="subtopic-title">3. Inclusão Digital e Acessibilidade:</div>
                    <p>
                        <li>Expandir o acesso à internet de alta velocidade para todas as regiões da cidade, com ênfase nas áreas mais vulneráveis, para garantir que todos os cidadãos possam se beneficiar das tecnologias digitais.</li>
                        <li>Criar centros de inclusão digital em comunidades carentes, oferecendo acesso a computadores, internet e programas de capacitação em habilidades digitais, com foco em crianças, jovens e idosos.</li>
                    </p>
                </div>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">4. Fomento à Pesquisa e Desenvolvimento:</div>
                    <p>
                      <li>Estabelecer fundos de incentivo à pesquisa e desenvolvimento (P&D) para apoiar projetos inovadores em áreas estratégicas, como saúde, educação, meio ambiente e segurança pública.</li>
                      <li>Incentivar a criação de programas de pós-graduação e projetos de pesquisa aplicada em parceria com universidades e empresas, visando soluções práticas para os desafios da cidade.</li>
                    </p>
                </div>
                </div>

                <div class="subtopic">
                <div class="subtopic-title">5. Inovação Urbana:</div>
                    <p>
                      <li>Utilizar tecnologias de smart city, como sensores IoT, big data e inteligência artificial, para monitorar e melhorar a infraestrutura urbana, incluindo mobilidade, segurança, gestão de resíduos e recursos naturais.</li>
                      <li>Promover a implementação de soluções de mobilidade inteligente, como semáforos conectados, aplicativos de transporte público e sistemas de compartilhamento de veículos, para tornar o transporte mais eficiente e sustentável.</li>
                    </p>
                </div>
                </div>

                <div class="subtopic">
                <div class="subtopic-title">6. Parcerias e Cooperação Internacional:</div>
                    <p>
                      <li>Estabelecer parcerias com cidades inovadoras ao redor do mundo para troca de experiências e boas práticas em ciência, tecnologia e inovação.</li>
                      <li>Participar de redes e consórcios internacionais que promovam a cooperação em projetos de pesquisa e desenvolvimento, atraindo investimentos e conhecimentos para Fortaleza.</li>
                    </p>
                </div>
                </div>

            </div>
            `
        },
        2: {
            title: "Meio Ambiente",
            text: `
            <p>As propostas para o meio ambiente utilizando ciência, tecnologia e inovação visam transformar Fortaleza em uma cidade mais sustentável e resiliente. Através de ações integradas e tecnológicas, será possível proteger os recursos naturais, promover a qualidade de vida e enfrentar os desafios das mudanças climáticas, garantindo um futuro mais verde para todos os cidadãos.</p>
                <div class="subtopic">
                <div class="subtopic-title">1. Monitoramento Ambiental</div>
                <p>
                    <li> Implementar uma rede de sensores IoT para monitoramento da qualidade do ar, água e solo, fornecendo dados em tempo real para a gestão ambiental e ações preventivas.</li>
                    <li> Utilizar drones e imagens de satélite para monitorar áreas de preservação, identificar desmatamentos ilegais e avaliar o impacto ambiental de atividades humanas.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">2. Gestão de Resíduos Sólidos</div>
                <p>
                    <li> Desenvolver um sistema inteligente de coleta de resíduos sólidos, utilizando sensores para otimizar as rotas de coleta e garantir a eficiência do serviço.</li>
                    <li> Promover a reciclagem e a compostagem através de programas de educação ambiental, tecnologias de triagem automática e incentivos para a separação correta dos resíduos.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">3. Energias Renováveis</div>
                <p>
                    <li> Incentivar a instalação de painéis solares em prédios públicos e privados, oferecendo subsídios e incentivos fiscais para a adoção de energia solar.</li>
                    <li> Desenvolver parques eólicos em áreas estratégicas da cidade, aproveitando o potencial natural de Fortaleza para a geração de energia limpa e sustentável.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">5. Conservação da Biodiversidade</div>
                <p>
                    <li> Criar e manter áreas verdes e corredores ecológicos dentro da cidade, utilizando tecnologias de planejamento urbano para promover a biodiversidade e o equilíbrio ecológico.</li>
                    <li> Implementar programas de conservação de espécies nativas e reintrodução de fauna e flora, utilizando biotecnologia para proteger a biodiversidade local.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">6. Educação e Conscientização Ambiental</div>
                <p>
                    <li> Desenvolver plataformas digitais de educação ambiental, utilizando realidade aumentada e virtual para engajar e educar a população sobre a importância da sustentabilidade.</li>
                    <li> Promover campanhas de conscientização sobre o uso responsável dos recursos naturais, reciclagem e preservação ambiental, utilizando mídias sociais e tecnologias de comunicação.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">7. Resiliência Climática</div>
                <p>
                    <li> Desenvolver um plano de adaptação às mudanças climáticas, utilizando modelagem climática para prever impactos futuros e implementar ações de mitigação e adaptação.</li>
                    <li> Fortalecer a infraestrutura da cidade para resistir a eventos climáticos extremos, utilizando materiais e tecnologias sustentáveis na construção de edificações e espaços públicos.</li>
                </p>
                </div>

            `
        },
        3: {
            title: "Segurança e Resiliência",
            text: `
            <p>As propostas para segurança e resiliência visam transformar Fortaleza em uma cidade mais segura e preparada para enfrentar situações de risco. Através do uso de ciência, tecnologia e inovação, será possível prevenir desastres, responder rapidamente a emergências e proteger a vida e o bem-estar dos cidadãos, construindo uma cidade resiliente e segura para todos.</p>
                <div class="subtopic">
                <div class="subtopic-title">1. Monitoramento e Prevenção de Riscos</div>
                <p>
                    <li> Implementar uma rede de sensores IoT para monitorar em tempo real áreas de risco, como encostas, zonas de inundação e regiões suscetíveis a deslizamentos, fornecendo dados para ações preventivas.</li>
                    <li> Utilizar tecnologias de big data e inteligência artificial para analisar dados históricos e prever situações de risco, permitindo a implementação de medidas preventivas e de mitigação.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">2. Sistemas de Alerta e Resposta Rápida</div>
                <p>
                    <li> Desenvolver um sistema integrado de alerta precoce, utilizando aplicativos móveis, SMS e sirenes para informar a população sobre riscos iminentes, como tempestades, inundações e incêndios.</li>
                    <li> Criar uma central de comando e controle equipada com tecnologias avançadas para coordenar respostas rápidas e eficientes em emergências, envolvendo equipes de resgate, bombeiros e defesa civil.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">3. Infraestrutura Resiliente</div>
                <p>
                    <li> Investir na construção e manutenção de infraestruturas resilientes, utilizando materiais e técnicas de engenharia que aumentem a resistência a desastres naturais e eventos extremos.</li>
                    <li> Desenvolver projetos de infraestrutura verde, como parques e áreas de retenção de água, que ajudem a mitigar os impactos das chuvas intensas e reduzir o risco de inundações.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">4. Capacitação e Treinamento da Comunidade</div>
                <p>
                    <li> Oferecer programas de capacitação e treinamento para a população sobre como agir em situações de risco, incluindo primeiros socorros, evacuação e preparação para desastres.</li>
                    <li> Promover simulados e exercícios de emergência regularmente, envolvendo escolas, empresas e comunidades, para garantir que todos saibam como responder adequadamente a crises.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">5. Tecnologias de Segurança Pública</div>
                <p>
                    <li> Implementar sistemas de vigilância inteligentes, como câmeras de segurança com reconhecimento facial e análise de comportamento, para monitorar áreas públicas e prevenir crimes.</li>
                    <li> Utilizar drones e veículos autônomos para patrulhamento e monitoramento de áreas de difícil acesso, aumentando a eficiência das operações de segurança pública.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">6. Cooperação e Coordenação Interinstitucional</div>
                <p>
                    <li> Estabelecer parcerias com instituições acadêmicas, ONGs e organizações internacionais para desenvolver pesquisas e projetos voltados para a segurança e resiliência urbana.</li>
                    <li> Criar um comitê interinstitucional de gestão de crises, reunindo representantes de diversas áreas do governo e da sociedade civil para coordenar ações e compartilhar informações em situações de emergência.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">7. Avaliação e Melhoria Contínua</div>
                <p>
                    <li> Implementar um sistema de monitoramento e avaliação contínua das políticas e ações de segurança e resiliência, utilizando indicadores de desempenho para identificar áreas de melhoria.</li>
                    <li> Envolver a população na avaliação dos programas e ações de segurança, coletando feedbacks e sugestões para garantir que as medidas adotadas atendam às necessidades reais da comunidade.</li>
                </p>
                </div>

            `
        },
        4: {
            title: "Infraestrutura e Mobilidade Sustentável",
            text: `
            <p>A proposta de infraestrutura e mobilidade sustentável visa transformar Fortaleza em uma cidade mais verde, acessível e resiliente. Através da integração de tecnologias inteligentes e práticas sustentáveis, Fortaleza se preparará para um futuro urbano mais eficiente e ambientalmente responsável, promovendo a qualidade de vida de seus cidadãos.</p>
                <div class="subtopic">
                <div class="subtopic-title">1. Transporte Público Eficiente:</div>
                <p>
                    <li> Sistema Integrado de Transporte Inteligente: Desenvolver um sistema de transporte público integrado que inclua ônibus, metrô, VLT e ciclovias, utilizando tecnologias de big data e IoT para otimizar rotas e horários, garantindo acesso eficiente e sustentável a todas as áreas da cidade.</li>
                    <li> Frota de Veículos Sustentáveis: Investir na renovação da frota de transporte público com veículos elétricos e de baixa emissão, incorporando tecnologias de monitoramento em tempo real para manutenção preventiva e eficiência operacional.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">2. Infraestrutura Verde:</div>
                <p>
                    <li> Planejamento Urbano Sustentável: Implementar práticas de planejamento urbano que priorizem a criação de espaços verdes, áreas de lazer e corredores ecológicos, utilizando ferramentas de geoprocessamento e análise espacial para promover a biodiversidade e o bem-estar dos cidadãos.</li>
                    <li> Edifícios Inteligentes e Sustentáveis: Incentivar a construção de edifícios que utilizem tecnologias de eficiência energética, sistemas de captação de água da chuva e materiais sustentáveis, integrando automação predial para otimização do consumo de recursos.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">3. Mobilidade Urbana Inteligente:</div>
                <p>
                    <li> Sistema de Transporte Inteligente (ITS): Implementar um sistema de transporte inteligente que utilize dados em tempo real para otimizar o fluxo de tráfego, reduzir congestionamentos e melhorar a segurança viária através de semáforos inteligentes e sistemas de monitoramento por câmeras.</li>
                    <li> Aplicativos de Mobilidade: Desenvolver e promover aplicativos que integrem informações de transporte público, compartilhamento de bicicletas e caronas, utilizando inteligência artificial para sugerir rotas mais eficientes e sustentáveis.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">4. Infraestrutura de Energia Renovável:</div>
                <p>
                    <li> Energia Solar e Eólica: Promover a instalação de painéis solares e turbinas eólicas em prédios públicos e privados, incentivando o uso de energias renováveis e reduzindo a dependência de fontes fósseis, com monitoramento inteligente para otimização da produção e consumo.</li>
                    <li> Redes Inteligentes (Smart Grids): Implementar redes inteligentes para otimizar a distribuição de energia, permitindo maior eficiência e integração de fontes renováveis, além de sistemas de armazenamento de energia para garantir a estabilidade da rede.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">5. Inclusão e Acessibilidade:</div>
                <p>
                    <li> Infraestrutura Acessível: Garantir que todas as infraestruturas de transporte e espaços públicos sejam acessíveis a pessoas com mobilidade reduzida, idosos e crianças, utilizando tecnologias assistivas para facilitar o acesso.</li>
                    <li> Programas de Educação e Conscientização: Desenvolver programas de educação e conscientização sobre mobilidade sustentável e segurança no trânsito, envolvendo escolas, empresas e comunidades, utilizando plataformas digitais e realidade aumentada para engajamento e aprendizado.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">6. Resiliência e Sustentabilidade:</div>
                <p>
                    <li> Gestão de Resíduos: Implementar sistemas eficientes de gestão de resíduos sólidos, incluindo reciclagem, compostagem e redução de resíduos, utilizando tecnologias de rastreamento e monitoramento para otimização da coleta e processamento.</li>
                    <li> Preparação para Mudanças Climáticas: Desenvolver estratégias para aumentar a resiliência da cidade às mudanças climáticas, incluindo infraestrutura resistente a inundações e sistemas de alerta precoce, utilizando sensores e análise de dados para monitoramento contínuo.</li>
                </p>
                </div>
            `
        },
        5: {
            title: "Educação e Capacitação",
            text: `
            <p>As propostas para educação e capacitação visam transformar Fortaleza em uma cidade de aprendizado contínuo e inovação educacional. Através do uso de ciência, tecnologia e inovação, será possível proporcionar um ensino de qualidade, inclusivo e acessível a todos, preparando os cidadãos para os desafios do futuro e promovendo o desenvolvimento sustentável da cidade.</p>
                <div class="subtopic">
                 <div class="subtopic-title">1. Educação Infantil e Creches:</div>
                    <p>
                    <li> Ampliar a rede de creches e pré-escolas públicas, garantindo acesso universal à educação infantil de qualidade para todas as crianças de Fortaleza.</li>
                    <li>Implementar programas de formação contínua para educadores infantis, utilizando metodologias inovadoras e tecnologias educacionais para o desenvolvimento integral das crianças</li>
                    </p>
                </div>
                <div class="subtopic">
                 <div class="subtopic-title">2. Educação Básica e Fundamental:</div>
                     <p>
                        <li> Introduzir tecnologias digitais nas salas de aula, como lousas interativas, tablets e plataformas de ensino online, para enriquecer o aprendizado e desenvolver habilidades tecnológicas nos alunos</li>
                        <li> Desenvolver currículos que integrem ciência, tecnologia, engenharia, artes e matemática (STEAM), promovendo um ensino interdisciplinar e preparando os alunos para os desafios do século XXI.</li>
                    </p>
                </div>
                <div class="subtopic">
                 <div class="subtopic-title">3. Ensino Médio e Técnico:</div>
                 <p>
                    <li> Expandir a oferta de cursos técnicos e profissionalizantes em parceria com instituições de ensino e empresas, focando em áreas estratégicas como tecnologia da informação, energias renováveis e saúde.</li>
                    <li> Implementar programas de estágio e aprendizagem prática, permitindo que os estudantes adquiram experiência no mercado de trabalho e desenvolvam competências profissionais relevantes.</li>
                </p>
                </div>
                <div class="subtopic">
                 <div class="subtopic-title">4. Ensino Superior e Pesquisa:</div>
                 <p>
                    <li> Fortalecer parcerias com universidades e centros de pesquisa para promover a inovação e a produção científica, oferecendo bolsas de estudo e incentivos para projetos de pesquisa aplicada.</li>
                    <li> Criar hubs de inovação dentro das universidades, proporcionando infraestrutura e apoio para startups e projetos de empreendedorismo estudantil.</li>
                </p>
                </div>
                <div class="subtopic">
                 <div class="subtopic-title">5. Inclusão Digital e Acessibilidade:</div>
                 <p>
                    <li> Expandir o acesso à internet de alta velocidade e fornecer dispositivos tecnológicos para estudantes de baixa renda, garantindo que todos tenham as ferramentas necessárias para a aprendizagem digital.</li>
                    <li> Desenvolver plataformas de ensino online acessíveis para pessoas com deficiência, utilizando tecnologias assistivas e conteúdos adaptados.</li>
                </p>
                </div>
                <div class="subtopic">
                 <div class="subtopic-title">6. Capacitação Contínua e Educação de Adultos:</div>
                    <p>
                    <li>Implementar programas de capacitação contínua para trabalhadores, focando em habilidades digitais e competências do futuro, como programação, análise de dados e cibersegurança.</li>
                    <li> Oferecer cursos de educação de adultos e alfabetização digital, permitindo que todos os cidadãos tenham acesso a oportunidades de aprendizado ao longo da vida.</li>
                </p>
                </div>
                <div class="subtopic"> 
                <div class="subtopic-title">7. Inovação Educacional:</div>
                <p>
                    <li> Estabelecer laboratórios de inovação educacional nas escolas, promovendo a experimentação de novas metodologias de ensino e aprendizagem baseadas em evidências científicas.</li>
                    <li> Utilizar inteligência artificial e análise de dados para personalizar o ensino, identificando as necessidades individuais dos alunos e oferecendo suporte personalizado.</li>
                </p>
                </div>

            `
        },
        6: {
            title: "Saúde e Bem-Estar",
            text: `
            <p>As propostas para saúde e bem-estar visam transformar Fortaleza em uma cidade mais saudável e acolhedora. Utilizando ciência, tecnologia e inovação, será possível reduzir o tempo de espera para exames, modernizar os postos de saúde e promover a prevenção e o cuidado integral, garantindo um atendimento ágil e de qualidade para todos os cidadãos.</p>
                <div class="subtopic">
                <div class="subtopic-title">1. Redução do Tempo de Espera para Exames</div>
                <p>
                    <li> Implementar um sistema de agendamento online integrado, que permita aos pacientes marcar consultas e exames de forma rápida e eficiente, reduzindo o tempo de espera.</li>
                    <li> Utilizar inteligência artificial para priorizar e organizar os agendamentos com base na urgência e nas necessidades dos pacientes, garantindo que os casos mais críticos sejam atendidos com celeridade.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">2. Modernização dos Postos de Saúde</div>
                <p>
                    <li> Equipar os postos de saúde com tecnologias avançadas de diagnóstico, como equipamentos de ultrassom, radiografia digital e laboratórios automatizados, para agilizar a realização e a análise de exames.</li>
                    <li> Implementar prontuários eletrônicos integrados, permitindo que os profissionais de saúde acessem rapidamente o histórico médico dos pacientes e tomem decisões informadas.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">3. Telemedicina e Atendimento Remoto</div>
                <p>
                    <li> Desenvolver uma plataforma de telemedicina que permita consultas online, reduzindo a necessidade de deslocamento e otimizando o atendimento médico.</li>
                    <li> Oferecer acompanhamento remoto para pacientes com doenças crônicas, utilizando dispositivos de monitoramento e aplicativos de saúde para garantir o controle contínuo de suas condições.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">4. Programas de Prevenção e Promoção da Saúde</div>
                <p>
                    <li> Implementar campanhas de prevenção e promoção da saúde, utilizando mídias sociais e aplicativos móveis para disseminar informações sobre hábitos saudáveis, vacinação e prevenção de doenças.</li>
                    <li> Desenvolver programas de educação em saúde nas escolas e comunidades, promovendo a conscientização sobre a importância da prevenção e do autocuidado.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">5. Capacitação dos Profissionais de Saúde</div>
                <p>
                    <li> Oferecer programas de capacitação contínua para os profissionais de saúde, focando em novas tecnologias, práticas baseadas em evidências e atendimento humanizado.</li>
                    <li> Utilizar simulações e realidade virtual para treinar os profissionais em situações de emergência e procedimentos complexos, garantindo a qualidade do atendimento.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">6. Saúde Mental e Bem-Estar</div>
                <p>
                    <li> Desenvolver programas de apoio à saúde mental, oferecendo serviços de psicologia e psiquiatria nos postos de saúde e através de plataformas digitais.</li>
                    <li> Promover atividades de bem-estar, como yoga, meditação e grupos de apoio, para melhorar a saúde mental e emocional dos cidadãos.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">7. Monitoramento e Avaliação da Qualidade</div>
                <p>
                    <li> Implementar sistemas de monitoramento da qualidade dos serviços de saúde, utilizando indicadores de desempenho para avaliar e melhorar continuamente o atendimento nos postos de saúde.</li>
                    <li> Envolver os cidadãos na avaliação dos serviços, através de pesquisas de satisfação e feedbacks, para garantir que as melhorias atendam às necessidades da população.</li>
                </p>
                </div>

            `
        },
        7:{
            title: "Governança Criativa e Digital para Fortaleza",
            text: `
                <p>A proposta de governança criativa e digital visa transformar Fortaleza em uma cidade mais transparente, eficiente e participativa. Através da digitalização dos serviços públicos, promoção da inovação e fortalecimento da participação cidadã, Fortaleza estará preparada para enfrentar os desafios do futuro com criatividade e tecnologia, garantindo uma administração pública mais moderna e acessível a todos.</p>
                <div class="subtopic">
                <div class="subtopic-title">1.Transparência e Acesso à Informação:</div>
                <p>
                    <li> Plataforma de Dados Abertos: Desenvolver uma plataforma de dados abertos onde todas as informações públicas estejam acessíveis à população, incluindo orçamentos, projetos, licitações e contratos.</li>
                    <li> Portal da Transparência: Reforçar e expandir o Portal da Transparência com informações atualizadas e de fácil compreensão, permitindo que os cidadãos acompanhem em tempo real as ações do governo municipal.</li>

                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">2. Participação Cidadã Digital:</div>
                <p>
                    <li> Plataforma de Participação Popular: Criar uma plataforma digital onde os cidadãos possam propor, discutir e votar em projetos de interesse público. Essa plataforma também permitirá o acompanhamento do progresso das propostas aprovadas.</li>
                    <li> Consultas Públicas Online: Realizar consultas públicas online sobre temas importantes, utilizando ferramentas digitais para colher a opinião e sugestões da população.</li>

                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">3. Digitalização dos Serviços Públicos:</div>
                <p>
                    <li> E-Governo integrado: Desenvolver um sistema integrado de e-governança, onde todos os serviços públicos possam ser acessados digitalmente, como emissão de documentos, agendamentos e pagamento de taxas.</li>
                    <li> App Fortaleza Digital: Lançar um aplicativo móvel que centralize todos os serviços públicos, permitindo aos cidadãos acessar informações e serviços de maneira rápida e eficiente.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">4. Eficiência Administrativa:</div>
                <p>
                    <li> Automação de Processos: Implementar tecnologias de automação para otimizar processos administrativos, reduzindo burocracia e aumentando a eficiência do serviço público.</li>
                    <li> Capacitação em Tecnologias Digitais: Promover a capacitação contínua dos servidores públicos em tecnologias digitais, garantindo que a equipe esteja preparada para utilizar e gerenciar as novas ferramentas.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">5. Inovação e Criatividade:</div>
                <p>
                    <li> Laboratórios de Inovação: Estabelecer laboratórios de inovação dentro da administração pública, onde equipes multidisciplinares possam desenvolver e testar novas soluções para os desafios urbanos.</li>
                    <li> Hackathons e Desafios Tecnológicos: Realizar hackathons e desafios tecnológicos voltados para a resolução de problemas da cidade, envolvendo startups, universidades e a comunidade local.</li>
                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">6. Segurança Digital:</div>
                <p>
                    <li> Cibersegurança: Implementar robustas políticas de cibersegurança para proteger os dados dos cidadãos e garantir a integridade dos sistemas de informação da prefeitura.</li>
                    <li> Educação Digital: Promover campanhas de conscientização sobre segurança digital para a população, ensinando boas práticas e prevenindo crimes cibernéticos.</li>

                </p>
                </div>
                <div class="subtopic">
                <div class="subtopic-title">7. Inclusão Digital:</div>
                <p>
                    <li> Acesso Universal à Internet: Expandir o acesso à internet de alta velocidade para todas as regiões da cidade, com foco nas áreas mais vulneráveis.</li>
                    <li> Centros de Inclusão Digital: Criar centros de inclusão digital em comunidades carentes, oferecendo acesso a computadores, internet e programas de capacitação em habilidades digitais.</li>
                </p>
                </div>
`

        }
    };

    const updatePositions = () => {
        const graph = document.querySelector('.graph');
        const graphRect = graph.getBoundingClientRect();
        const centerX = graphRect.width / 2;
        const centerY = graphRect.height / 2;
        const radius = Math.min(centerX, centerY) - peripheralNodeRadius - 20; // Aumentei a margem para o raio máximo

        // Posiciona o nó central no centro da área gráfica
        centralNode.style.top = `${centerY - centralNodeRadius}px`;
        centralNode.style.left = `${centerX - centralNodeRadius}px`;

        peripheralNodes.forEach((peripheral, index) => {
            const angle = (index / peripheralNodes.length) * (2 * Math.PI);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            peripheral.style.top = `${centerY + y - peripheralNodeRadius}px`;
            peripheral.style.left = `${centerX + x - peripheralNodeRadius}px`;

            const line = document.querySelector(`.line[data-target="${index}"]`) || document.createElement('div');
            line.className = 'line';
            line.dataset.target = index;
            if (!line.parentElement) {
                document.body.appendChild(line);
            }

            const updateLine = () => {
                const centralRect = centralNode.getBoundingClientRect();
                const peripheralRect = peripheral.getBoundingClientRect();

                const x1 = centralRect.left + centralRect.width / 2 + centralNodeRadius * Math.cos(angle);
                const y1 = centralRect.top + centralRect.height / 2 + centralNodeRadius * Math.sin(angle);
                const x2 = peripheralRect.left + peripheralRect.width / 2 - peripheralNodeRadius * Math.cos(angle);
                const y2 = peripheralRect.top + peripheralRect.height / 2 - peripheralNodeRadius * Math.sin(angle);

                const length = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
                const rotationAngle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

                line.style.width = `${length}px`;
                line.style.transform = `rotate(${rotationAngle}deg)`;
                line.style.top = `${y1}px`;
                line.style.left = `${x1}px`;
            };

            updateLine();
            window.addEventListener('resize', updateLine);
        });
    };

    const showModal = (title, text) => {
        modalTitle.textContent = title;
        modalText.innerHTML = text; // Usei innerHTML para suportar subtópicos
        modal.style.display = 'block';
    };

    peripheralNodes.forEach(node => {
        node.addEventListener('click', (event) => {
            const index = event.currentTarget.dataset.index;
            const content = nodeContents[index];
            showModal(content.title, content.text);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    updatePositions();
    window.addEventListener('resize', updatePositions);
});
