FROM python:3.8.3-slim-buster

# install dependencies
RUN pip install --upgrade pip

COPY ./requirements.txt ./requirements.txt
RUN pip install -r ./requirements.txt

WORKDIR /src

COPY . /src

ENTRYPOINT [ "python" ]

EXPOSE 8080

CMD [ "./src/Main.py" ]
