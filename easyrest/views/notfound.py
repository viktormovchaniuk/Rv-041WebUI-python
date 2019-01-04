"""This module describes 404 page controler using jinja2 template from
cookiecutter
"""

from pyramid.view import notfound_view_config

from ..scripts.json_helpers import wrap


@notfound_view_config(renderer='json')
def notfound_view(error, request):
    return wrap([], False, "%s: %s" % (error.title, error.args[0]))
