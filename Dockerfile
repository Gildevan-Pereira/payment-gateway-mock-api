# Escolhe uma imagem base (exemplo: Node.js versão LTS)
FROM node:20.16.0

# Define o diretório de trabalho na imagem
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o código-fonte para o contêiner
COPY . .

# Expõe a porta que sua aplicação usa (por exemplo, 3000)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
