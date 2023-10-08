import qrcode

def generate_qr_code(data, filename='qrcode.png'):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    img.save(filename)

if __name__ == "__main__":
    data_to_encode = input("Enter data to encode in the QR code: ")
    output_filename = input("Enter output filename (default: qrcode.png): ") or 'qrcode.png'

    generate_qr_code(data_to_encode, output_filename)
    print(f"QR code saved as {output_filename}")
