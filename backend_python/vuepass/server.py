#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
API
"""
import sys
import os

# hack python path
PROJECT_PATH = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
sys.path.insert(0, PROJECT_PATH)

# pylint: disable=C0413
from vuepass import store
from flask import Flask, jsonify, request


# Flask Application
APP = Flask(__name__)
APP.debug = True

config = {} # pylint: disable=invalid-name
config['store'] = '~/.password-store'
config['cmd'] = '/usr/local/bin/pass'

@APP.route('/api/keys', methods=['GET'])
def list_keys():
    """list keys"""
    path = config['store']
    groups = store.list_keys_from_directory(path)
    return jsonify({'groups': groups})

@APP.route('/')
def root():
    """/ request"""
    return APP.send_static_file('index.html')

if __name__ == '__main__':
    APP.run()
