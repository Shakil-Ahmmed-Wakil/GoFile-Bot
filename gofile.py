import requests

def uploadFile(file: str):
    server = requests.get("https://api.gofile.io/getServer").json()["data"]["server"]
    response = requests.post(
        url=f"https://{server}.gofile.io/uploadFile",
        data={
            "token": EbQeGzZf179RNzbzmqZ4LOAn9oPhCYWl,
            "folderId": 4yhdHA,
            "description": None,
            "password": None,
            "tags": None,
            "expire": None
        },
        files={"upload_file": open(file, "rb")}
    ).json()
    if response["status"] == "ok":
        return response["data"]
    elif "error-" in response["status"]:
        error = response["status"].split("-")[1]
        raise Exception(error)
