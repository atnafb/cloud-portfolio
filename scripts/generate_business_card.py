from pathlib import Path

from reportlab.graphics import renderPDF
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.lib.colors import HexColor, white
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Atnafu_Ayalew_Business_Card_Print.pdf"

PAGE_WIDTH = 3.75 * inch
PAGE_HEIGHT = 2.25 * inch
BLEED = 0.125 * inch
SAFE = 0.125 * inch

INK = HexColor("#111827")
MUTED = HexColor("#4B5563")
BLUE = HexColor("#1D4ED8")
BLUE_DARK = HexColor("#123A8C")
BLUE_LIGHT = HexColor("#E8F0FF")
GREEN = HexColor("#16A34A")
LINE = HexColor("#D8E0EC")


def draw_qr(pdf, value, x, y, size):
    widget = qr.QrCodeWidget(value, barLevel="M")
    x1, y1, x2, y2 = widget.getBounds()
    width = x2 - x1
    height = y2 - y1
    drawing = Drawing(
        size,
        size,
        transform=[size / width, 0, 0, size / height, 0, 0],
    )
    drawing.add(widget)
    renderPDF.draw(drawing, pdf, x, y)


def draw_front(pdf):
    pdf.setFillColor(white)
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)

    pdf.setFillColor(BLUE_DARK)
    pdf.rect(0, PAGE_HEIGHT - 8, PAGE_WIDTH, 8, fill=1, stroke=0)
    pdf.setFillColor(GREEN)
    pdf.rect(0, PAGE_HEIGHT - 8, 72, 8, fill=1, stroke=0)

    left = BLEED + SAFE
    pdf.setFillColor(BLUE)
    pdf.roundRect(left, 116, 25, 25, 5, fill=1, stroke=0)
    pdf.setFillColor(white)
    pdf.setFont("Helvetica-Bold", 9.5)
    pdf.drawCentredString(left + 12.5, 124, "AA")

    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 17)
    pdf.drawString(left + 34, 129, "Atnafu Ayalew")
    pdf.setFillColor(BLUE)
    pdf.setFont("Helvetica-Bold", 8.5)
    pdf.drawString(left + 34, 117, "CLOUD ENGINEER  |  DATA ENGINEER")

    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.7)
    pdf.line(left, 104, 170, 104)

    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 8.3)
    pdf.drawString(left, 90, "Serverless cloud systems, data pipelines,")
    pdf.drawString(left, 79, "and practical AI integration.")

    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 9.5)
    pdf.drawString(left, 58, "atnafuayalew.com")
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 7.4)
    pdf.drawString(left, 44, "ayalewatna@gmail.com")
    pdf.drawString(left, 32, "linkedin.com/in/atnafuayalew")

    panel_x = 184
    panel_y = 24
    panel_width = 68
    panel_height = 87
    pdf.setFillColor(BLUE_LIGHT)
    pdf.roundRect(panel_x, panel_y, panel_width, panel_height, 5, fill=1, stroke=0)
    pdf.setFillColor(white)
    pdf.roundRect(panel_x + 6, panel_y + 21, 56, 56, 2, fill=1, stroke=0)
    draw_qr(pdf, "https://atnafuayalew.com", panel_x + 8, panel_y + 23, 52)
    pdf.setFillColor(BLUE_DARK)
    pdf.setFont("Helvetica-Bold", 6.3)
    pdf.drawCentredString(panel_x + panel_width / 2, panel_y + 9, "SCAN PORTFOLIO")


def draw_skill_line(pdf, y, label, text):
    left = BLEED + SAFE
    pdf.setFillColor(BLUE)
    pdf.setFont("Helvetica-Bold", 7.1)
    pdf.drawString(left, y, label)
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica", 7.4)
    pdf.drawString(left + 38, y, text)


def draw_back(pdf):
    pdf.setFillColor(white)
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    pdf.setFillColor(BLUE_DARK)
    pdf.rect(0, 0, 10, PAGE_HEIGHT, fill=1, stroke=0)
    pdf.setFillColor(GREEN)
    pdf.rect(10, PAGE_HEIGHT - 24, 4, 24, fill=1, stroke=0)

    left = BLEED + SAFE
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 13)
    pdf.drawString(left, 129, "Cloud + Data Skills")
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 7.3)
    pdf.drawRightString(PAGE_WIDTH - BLEED - SAFE, 130, "github.com/atnafb")

    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.7)
    pdf.line(left, 119, PAGE_WIDTH - BLEED - SAFE, 119)

    draw_skill_line(
        pdf,
        104,
        "CLOUD",
        "AWS, Lambda, Bedrock, API Gateway, VPC, RDS",
    )
    draw_skill_line(
        pdf,
        89,
        "DATA",
        "Python, SQL, Pandas, ETL, Glue, Redshift",
    )
    draw_skill_line(
        pdf,
        74,
        "TOOLS",
        "CloudFormation, Linux, Git, CloudWatch",
    )

    cert_y = 17
    cert_height = 52
    pdf.setFillColor(BLUE_DARK)
    pdf.roundRect(left, cert_y, PAGE_WIDTH - left - BLEED - SAFE, cert_height, 5, fill=1, stroke=0)
    pdf.setFillColor(HexColor("#8DE4A8"))
    pdf.setFont("Helvetica-Bold", 7.2)
    pdf.drawString(left + 9, cert_y + 37, "CERTIFICATIONS")
    pdf.setFillColor(white)
    pdf.setFont("Helvetica-Bold", 7.5)
    pdf.drawString(left + 9, cert_y + 24, "AWS Certified Cloud Practitioner - 2026")
    pdf.setFont("Helvetica", 6.9)
    pdf.drawString(left + 9, cert_y + 13, "AWS re/Start Graduate  |  UNC Charlotte Data Analytics Certificate")


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=(PAGE_WIDTH, PAGE_HEIGHT))
    pdf.setTitle("Atnafu Ayalew Business Card")
    pdf.setAuthor("Atnafu Ayalew")
    pdf.setSubject("Cloud Engineer and Data Engineer networking business card")

    draw_front(pdf)
    pdf.showPage()
    draw_back(pdf)
    pdf.showPage()
    pdf.save()
    print(OUTPUT)


if __name__ == "__main__":
    main()
