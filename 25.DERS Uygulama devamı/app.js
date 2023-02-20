

let kullaniciAdi = localStorage.getItem("kullaniciAdi");
let sifre = localStorage.getItem("sifre");
let bakiye = localStorage.getItem("bakiye");
let iban = localStorage.getItem("iban");
let tc = localStorage.getItem("tcnumarasi");
let sayac = localStorage.getItem("sayac")

// localStorage.setItem("kullaniciAdi","samet");
// localStorage.setItem("sifre",2201);
// localStorage.setItem("bakiye",1000);
//localStorage.setItem("iban",2201);
localStorage.setItem("tcnumarasi",2201)
localStorage.setItem("sayac",220120)






$(".loginbtn").click(function()
{
    $(".loginbtn").css('background','black')
    let girilenKullaniciAdi= $(".kadi").val();
    let girilenSifre = $(".ksifre").val();
        if(girilenKullaniciAdi==kullaniciAdi && girilenSifre==sifre)
        {
            $(".girisyap").hide();
            $(".islemsec").show();
            $(".kullanılabilirbakiye").html(`Kullanılabilir Bakiye : ${bakiye}`);            
            $(".islemsecbtn").click(function()
            {
                let yapilacakislem = $(".yapilacakislem").val();
                let çekilmekİstenilenTütar = Number($(".girilentütar").val())
                    if(yapilacakislem=="Para Çek")
                    {                      
                    if(çekilmekİstenilenTütar<=bakiye){
                        let kalanTutar = bakiye - çekilmekİstenilenTütar;
                        $(".kalanbakiye").html(`Para Çekme İşleminiz Tamamlandı. Kalan Bakiyeniz: ${kalanTutar}`);
                        $(".kullanılabilirbakiye").hide()
                    
                    }

                    else if(çekilmekİstenilenTütar>bakiye){
                        alert("Bakiyeniz Yetersiz");
                    }
                    }
                    //* Para Yatırma Bölümü

                    else if(yapilacakislem =="Para Yatır")
                    {                        
                        kalanTutar = Number(bakiye) + çekilmekİstenilenTütar;
                        $(".kalanbakiye").html(`Para Yatırma İşleminiz Tamamlandı.   Kullanılabilir Bakiyeniz: ${kalanTutar}`);
                        $(".kullanılabilirbakiye").hide();                        
                        
                    }

                    else if(yapilacakislem=="Kredi Çek")
                    {
                        $(".islemsec").hide();
                        $(".kredisec").show();            
                        
                        $(".kredihesap").click(function()
                        {
                            let çekilmekİstenilenTütar = Number($(".girilentütar").val());
                            let vade = $(".vade").val();
                            if(vade=="3 Ay")
                            {
                                let faiz = çekilmekİstenilenTütar * 0.18;
                                let toplamBorç = çekilmekİstenilenTütar + faiz;
                                let aylıkGeriÖdeme = toplamBorç / 3;
                                $(".ödeme").html(`Toplam Geri Ödeme : ${toplamBorç}`);
                                $(".ayliködeme").html(`Aylık Ödeme Tutarı: ${aylıkGeriÖdeme.toFixed(2)}`);

                            }

                            else if(vade=="6 Ay")
                            {
                                let faiz = çekilmekİstenilenTütar * 0.25;
                                let toplamBorç = çekilmekİstenilenTütar + faiz;
                                let aylıkGeriÖdeme = toplamBorç / 6;
                                $(".ödeme").html(`Toplam Geri Ödeme : ${toplamBorç}`);
                                $(".ayliködeme").html(`Aylık Ödeme Tutarı: ${aylıkGeriÖdeme.toFixed(2)}`);  
                            }

                            else if(vade == "9 Ay")
                            {
                                let faiz = çekilmekİstenilenTütar * 0.50;
                                let toplamBorç = çekilmekİstenilenTütar + faiz;
                                let aylıkGeriÖdeme = toplamBorç / 9;
                                $(".ödeme").html(`Toplam Geri Ödeme : ${toplamBorç}`);
                                $(".ayliködeme").html(`Aylık Ödeme Tutarı: ${aylıkGeriÖdeme.toFixed(2)}`); 
                            }
                        }                        
                        )
                    }                
            })
        }

        else{
            alert("HAtalı Şifre");
        }     
        
})

$(".loginbtnn").click(function()
{    
    $(".girisyap").hide();
    $(".islemsec").hide();
    $(".kartsizislem").show();
    $(".kisbtn").click(function()
    {
    let kisyplck = $(".kisyplck").val()
    if(kisyplck=="İban İle Para Gönder")
    {
        $(".kartsizislem").hide()
        $(".iban").show();       
        
        $(".gönder").click(function()
        {
            let gönderilecekiban= Number($(".ibannmr").val());
            if(iban==gönderilecekiban)
            {
                let gönderilen = Number($(".gönderilen").val());
                let giden = bakiye-gönderilen
                $(".gönderdi").html(`Para Gönderme İşlemi Başarılı`);
                $(".kaldi").html(`Kalan Kullanılabilir Bakiye: ${giden}`);
                $(".gönderilenmi").html(`Gönderilen Tutar: ${gönderilen}`);
            }
            else{
                $(".gönderdi").html(`HATALI IBAN NUMARASI`);
                
            }    
        })

        $(".iptal").click(function()
        {
            $(".bir").hide();
            $(".iki").hide();
            $(".alert").show();
        })
        $(".hayir").click(function()
        {
            $(".alert").hide();
            $(".bir").show();
            $(".iki").show();
        })


    }

    else if(kisyplck=="Üniversite Harç Ödemesi")
    {
        $(".kartsizislem").hide();
        $(".harç").show();
        
        $(".harcyatırma").click(function()
        {
            let girilentc = Number($(".tcnümarasi").val());
            if(tc==girilentc)
            {
                let harcbedeli = Number($(".harcbdli").val());
                let harcbedelindensonra = bakiye - harcbedeli;
                $(".hrc").html(`Yatırılan Harç Bedeli: ${harcbedeli}`);
                $(".kln").html(`Kalan Bakiye: ${harcbedelindensonra}`)
            }         
                
            
        })
    }

    else if(kisyplck=="Fatura Öde")
    {    
        $(".kartsizislem").hide();
        $(".fatüra").show();       
        $(".ftr").click(function()
        {
            let fatüralar = $(".fatüralar").val();
            if(fatüralar=="Doğalgaz Öde")
            {
                $(".fatüra").hide();
                $(".dogalgazbr").show();            
                
                $(".dgbtn").click(function()
                {
                    let sayacnumarası = Number($(".sayacnumara").val()); 
                    if(sayacnumarası==sayac){
                        let faturabedeli = Number($(".dm").val());
                        let fökalan = bakiye - faturabedeli
                        $(".dmdm").html(`Ödeme Başarılı <br> Kalan Kullanılabilir tutar: ${fökalan}`)
                        
                    }
                    else
                    {
                        $(".dmdm").html(`Ödeme Başarısız Bilgileriniz Kontrol Edin`)     
                    }                  
                }) 
            }




            else if(fatüralar=="Elektrik Öde")
            {
                $(".fatüra").hide();
                $(".elektrkbr").show();
                $(".dgbtn1").click(function()
                {
                    let sayacnumarasıı = Number($(".syc2").val());
                    if(sayacnumarasıı==sayac)
                    {
                        let faturabedelii = Number($(".dm1").val());
                        let fökkalan = bakiye - faturabedelii
                        $(".dmdmdm").html(`Ödeme Başarılı <br> Kalan Kullanılabilir 
                        tutar: ${fökkalan}`)
                    }
                    else
                    {
                        $(".dmdmdm").html(`Ödeme Başarısız Bilgileriniz Kontrol 
                        Edin`)     
                    }                  
                })
                
            }




            else if(fatüralar=="Su Öde")
            {
                $(".fatüra").hide();
                $(".subr").show();
            }     
        })
        
                
    }
    }) 
})
