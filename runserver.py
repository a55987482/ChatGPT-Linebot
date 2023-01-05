from flask import Flask
from flask import render_template
from controller import blueprint
from config import config
import os

app = Flask(__name__, static_folder='view/static', template_folder='view/templates')
app.config.from_object(config)

app.register_blueprint(blueprint)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404page.html'), 404

if __name__ == '__main__':
    app.run(host=config.IP, port=config.Port)
