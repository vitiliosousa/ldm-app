import Card from "../../components/Card";
import Modal from "../../components/Modal";

export default function Elementos() {
    return(
        <div className="flex flex-col bg-gradient-to-r from-black to-escuro py-5 space-y-10 w-full items-center">
            <h1 className="uppercase text-white text-xl md:text-2xl">Elementos</h1>
            <div className="flex flex-wrap gap-4 justify-center w-full">
                <Card
                title={"TIPO DE COBERTURA"}
                description={"Tipo de cobertura do projeto arquitetônico."}
                />
                <Card
                title={"MATERIAL DE COBERTURA"}
                description={"Material utilizado para a cobertura do edifício."}
                />
                <Card
                title={"PAREDES"}
                description={"Material utilizado para as paredes do edifício."}
                />
                <Card
                title={"ESTRUTURA"}
                description={"Material utilizado para a estrutura do edifício."}
                />
                <Card
                title={"FUNDAÇÕES"}
                description={"Tipo de fundações utilizadas para a sustentação do edifício."}
                />
                <Card
                title={"LOCALIZAÇÃO EM RELAÇÃO AO CENTRO DA CIDADE"}
                description={"Localização do projeto em relação ao centro da cidade ou em áreas rurais."}
                />
                <Card
                title={"ESTILO DE ARQUITETURA"}
                description={"Estilo arquitetônico desejado para o projeto."}
                />
                <Card
                title={"ÁREA DE LOTE"}
                description={"Área total do terreno destinado ao projeto."}
                />
                <Card
                title={"TIPOLOGIA"}
                description={"Layout interno do edifício em termos de número de quartos ou funções."}
                />
                <Card
                title={"MATERIAL DE COBERTURA"}
                description={"Material utilizado para revestir o piso do edifício."}
                />
                <Card
                title={"TIPO DE COBERTURA"}
                description={"Especificações adicionais sobre os acabamentos utilizados."}
                />
                <Card
                title={"SISTEMA DE AQUECIMENTO"}
                description={"Sistema de aquecimento utilizado no edifício."}
                />
                <Card
                title={"SISTEMA DE REFRIGERAÇÃO"}
                description={"Sistema de refrigeração utilizado no edifício."}
                />
                <Card
                title={"INSTALAÇÕES ELECTRICAS"}
                description={"Especificações sobre as instalações elétricas do edifício."}
                />
                <Card
                title={"INSTALAÇÕES HIDRAULICAS"}
                description={"Especificações sobre as instalações hidráulicas do edifício."}
                />
                <Card
                title={"INSTALAÇÕES DE SEGURANÇA"}
                description={"Sistema de segurança instalado no edifício."}
                />
                <Card
                title={"PAISAGISMO"}
                description={"Elementos paisagísticos incluídos no projeto."}
                />
                <Card
                title={"OUTROS CRITERIOS"}
                description={"Critérios adicionais a serem considerados na estimativa de custo"}
                />
            </div>
        </div>
    )
}