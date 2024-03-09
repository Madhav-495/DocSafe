import sys
from PyPDF2 import PdfReader, PdfWriter
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas
from io import BytesIO
import base64
def sign_pdf(pdf_buffer, image_buffer):
    try:
        # Read PDF buffer
        pdf_reader = PdfReader(BytesIO(pdf_buffer))
        pdf_writer = PdfWriter()

        # Iterate through each page of the PDF
        for page in pdf_reader.pages:
            # Create a canvas for each page
            output_pdf = BytesIO()
            pdf_canvas = canvas.Canvas(output_pdf, pagesize=letter)
            
            # Add the PDF page to the canvas
            pdf_canvas.saveState()
            pdf_canvas.setFont('Helvetica', 12)
            pdf_canvas.drawString(50, 50, "Your signature goes here")

            # Draw the image at the bottom of the page
            page_width, page_height = page.mediabox.upper_right
            image = ImageReader(BytesIO(image_buffer))
            pdf_canvas.drawImage(image, 100, 100, width=200, height=100)

            # Merge the canvas with the PDF page
            pdf_canvas.restoreState()
            pdf_canvas.showPage()
            pdf_canvas.save()
            pdf_page = PdfReader(BytesIO(output_pdf.getvalue())).pages[0]
            
            # Merge the modified page with the original PDF
            pdf_writer.add_page(page)
            pdf_writer.add_page(pdf_page)
        
        # Save the signed PDF to buffer
        output_buffer = BytesIO()
        pdf_writer.write(output_buffer)
        signed_pdf_buffer = output_buffer.getvalue()

        return signed_pdf_buffer

    except Exception as e:
        print("Error:", e, file=sys.stderr)
        sys.exit(1)

combined_base64 = sys.stdin.buffer.read().decode()

# Split the combined base64 string at the newline character
file_base64, image_base64 = combined_base64.split('\n', 1)

# Decode base64 strings to obtain the PDF buffer and the image buffer
pdf_buffer = base64.b64decode(file_base64)
image_buffer = base64.b64decode(image_base64)

# Perform signature creation
signed_pdf_buffer = sign_pdf(pdf_buffer, image_buffer)

# Send the signed PDF buffer to stdout
sys.stdout.buffer.write(signed_pdf_buffer)
