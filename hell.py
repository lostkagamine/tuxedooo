import flask
app = flask.Flask('aaa', template_folder='templates')

@app.route('/')
def a():
    return flask.render_template('index.html', biggay="big gay")

@app.route('/exit')
def lol():
    exit(0)

app.run('0.0.0.0')