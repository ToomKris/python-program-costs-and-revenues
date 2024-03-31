import easygui

# Algseis - kategooriad ja rahahulgad
eelarve = {"Toit": 0, "Transport": 0, "Majapidamine": 0, "Meelelahutus": 0}

# Funktsioon kategooriasse raha lisamiseks
def lisamine():
    # Valib kategooria
    kategooria = easygui.choicebox("Valige kategooria:", choices=list(eelarve.keys()))
    
    if kategooria:  # Kontrollib, kas kasutaja tegi valiku
        # Summa, mida soovitakse lisada
        summa_str = easygui.enterbox("Sisestage summa, mida soovite kategooriasse '" + kategooria + "' lisada:")
        
        if summa_str:  # Kontrollib, kas kasutaja sisestas summa
            # Üritab teisendada sisestatud summa arvuks
            summa = float(summa_str)
            # Kontrollib, et sisestatud summa oleks mitte-negatiivne
            if summa >= 0:
                # Lisab sisestatud summa valitud kategooriasse
                eelarve[kategooria] += summa
                easygui.msgbox(str(summa) + " lisati kategooriasse '" + kategooria + "'.")
            else:
                easygui.msgbox("Sisestage positiivne summa.")  # Hoiatab negatiivse summa eest
        

# Funktsioon raha võtmiseks kategooriast
def kulutamine():
    # Valib kategooria
    kategooria = easygui.choicebox("Valige kategooria:", choices=list(eelarve.keys()))
    
    if kategooria:  # Kontrollib, kas kasutaja tegi valiku
        # Sisestab summa, mida soovitakse kulutada
        summa_str = easygui.enterbox("Sisestage summa, mida soovite kategooriast '" + kategooria + "' kulutada:")
        
        if summa_str:  # Kontrollib, kas kasutaja sisestas summa
            # Üritab teisendada sisestatud summa arvuks
            summa = float(summa_str)
            # Kontrollib, et sisestatud summa oleks mitte-negatiivne
            if summa >= 0:
                # Kontrollib, kas kategoorias on piisavalt raha
                if eelarve[kategooria] >= summa:
                    # Võtab sisestatud summa valitud kategooriast maha
                    eelarve[kategooria] -= summa
                    easygui.msgbox(str(summa) + " võeti kategooriast '" + kategooria + "' välja.")
                else:
                    easygui.msgbox("Kategoorias pole piisavalt raha.")  # Hoiatab ebapiisava raha eest
            else:
                easygui.msgbox("Sisestage positiivne summa.")  # Hoiatab negatiivse summa eest
        

# Funktsioon kategooriate jäägi näitamiseks
def näita_jääki():
    # Koostab sõnumi kategooriate ja rahahulkadega
    jäägid = "\n".join([kategooria + ": " + str(summa) for kategooria, summa in eelarve.items()])
    easygui.msgbox("Kategooriate jäägid:\n" + jäägid)

# Põhimenüü funktsioon
def põhimenüü():
    while True:
        # Kuvab nupumenuu ja ootab kasutaja valikut
        valik = easygui.buttonbox("Valige tegevus:", choices=["Lisamine", "Kulutamine", "Näita jääki", "Välju"])
        
        # Vastavalt kasutaja valikule teostatakse vastav tegevus
        if valik == "Lisamine":
            lisamine()
        elif valik == "Kulutamine":
            kulutamine()
        elif valik == "Näita jääki":
            näita_jääki()
        elif valik == "Välju":
            break

# Rakenduse käivitamine
põhimenüü()
