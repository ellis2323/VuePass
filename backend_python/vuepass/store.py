#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
Store management
"""

import os

def create_group(key, name):
    """create a group of keys: node of our tree"""
    res = {}
    res['name'] = name
    res['key'] = key
    res['keys'] = []
    res['groups'] = []
    res['children'] = []
    return res

def link_group(groups, group_key):
    """list """
    for g in groups[group_key]['groups']:
        if g in groups:
            groups[group_key]['children'].append(groups[g])
            link_group(groups, g)

def clean_group(groups):
    """remove groups and key keys"""
    print groups
    if groups.has_key('key'):
        del groups['key']
    if groups.has_key('groups'):
        del groups['groups']
    for g in groups['children']:
        clean_group(g)

def print_group(group, level=0):
    """print group"""
    pp1 = ' ' * level + group['name']
    print pp1
    pp2 = ' ' * level + ' keys: '
    for k in group['keys']:
        pp2 += k + ', '
    print pp2
    for child in group['children']:
        print_group(child, level+1)

def list_keys_from_directory(path):
    """list keys in directory"""
    groups = {}
    # resolve ~
    path = os.path.expanduser(path)
    # convert to absolute path
    path = os.path.abspath(path)
    # directories contains directories of root and files contains files of root
    for root, directories, files in os.walk(path):
        groups[root] = create_group(root, os.path.basename(root))
        # remove git
        if '.git' in directories:
            directories.remove('.git')
        # remove gpg-keys
        if '.gpg-keys'  in directories:
            directories.remove('.gpg-keys')
        # create a group for each directory
        for d in directories:
            groups[root]['groups'].append(root + '/' + d)
        for item in files:
            if isinstance(item, basestring) and item.endswith('.gpg'):
                key = item[:-len('.gpg')]
                groups[root]['keys'].append(key)
    # rebuild the tree
    link_group(groups, path)
    # get root group
    res = groups[path]
    # clean groups by removing unuseful keys
    clean_group(res)
    # fix
    res['name'] = 'VuePass'
    return res

if __name__ == '__main__':
    print "Store VuePass"
    GRP = list_keys_from_directory('~/.password-store')
    print_group(GRP)
