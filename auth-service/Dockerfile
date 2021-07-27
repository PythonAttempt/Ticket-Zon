FROM python

COPY main.py /app/main.py
COPY requirements.txt /app/requirements.txt
# flask and pyjwt

RUN pip install -r /app/requirements.txt

WORKDIR /app

CMD ["python3", "main.py"]
