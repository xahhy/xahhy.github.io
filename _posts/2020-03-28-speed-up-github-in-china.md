---
layout: article
title: 'Speed up Github in China'
date: 2020-03-28 14:35:00 +0800
categories: 
tags: China Github
---
# Github DNS Records

Add the following DNS records in `/etc/hosts` on Linux or Mac:
```
192.30.253.113 github.com
151.101.185.194 github.global.ssl.fastly.net
203.98.7.65 gist.github.com
13.229.189.0 codeload.github.com
185.199.109.153 desktop.github.com 
185.199.108.153 guides.github.com  
185.199.108.153 blog.github.com
18.204.240.114 status.github.com
185.199.108.153 developer.github.com
185.199.108.153 services.github.com
192.30.253.175 enterprise.github.com   
34.195.49.195 education.github.com    
185.199.108.153 pages.github.com  
34.196.237.103 classroom.github.com
```

Thanks for sharing the DSN records, really helped us:
https://b23.tv/BV1ME41147bv
