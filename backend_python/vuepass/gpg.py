#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
API
"""

import gnupg

if __name__ == '__main__':
    GPG = gnupg.GPG(homedir='~/.gnupg')
    print GPG.list_keys()
    print "GPG VuePass"
