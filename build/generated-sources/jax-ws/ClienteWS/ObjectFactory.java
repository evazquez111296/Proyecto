
package ClienteWS;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the ClienteWS package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _Insertar_QNAME = new QName("http://ws.electroescom.com/", "insertar");
    private final static QName _InsertarResponse_QNAME = new QName("http://ws.electroescom.com/", "insertarResponse");
    private final static QName _ConsultarUsuarios_QNAME = new QName("http://ws.electroescom.com/", "consultarUsuarios");
    private final static QName _ConsultarUsuariosResponse_QNAME = new QName("http://ws.electroescom.com/", "consultarUsuariosResponse");
    private final static QName _IniciarSesionResponse_QNAME = new QName("http://ws.electroescom.com/", "iniciarSesionResponse");
    private final static QName _IniciarSesion_QNAME = new QName("http://ws.electroescom.com/", "iniciarSesion");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: ClienteWS
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link Insertar }
     * 
     */
    public Insertar createInsertar() {
        return new Insertar();
    }

    /**
     * Create an instance of {@link InsertarResponse }
     * 
     */
    public InsertarResponse createInsertarResponse() {
        return new InsertarResponse();
    }

    /**
     * Create an instance of {@link IniciarSesion }
     * 
     */
    public IniciarSesion createIniciarSesion() {
        return new IniciarSesion();
    }

    /**
     * Create an instance of {@link IniciarSesionResponse }
     * 
     */
    public IniciarSesionResponse createIniciarSesionResponse() {
        return new IniciarSesionResponse();
    }

    /**
     * Create an instance of {@link ConsultarUsuarios }
     * 
     */
    public ConsultarUsuarios createConsultarUsuarios() {
        return new ConsultarUsuarios();
    }

    /**
     * Create an instance of {@link ConsultarUsuariosResponse }
     * 
     */
    public ConsultarUsuariosResponse createConsultarUsuariosResponse() {
        return new ConsultarUsuariosResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Insertar }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.electroescom.com/", name = "insertar")
    public JAXBElement<Insertar> createInsertar(Insertar value) {
        return new JAXBElement<Insertar>(_Insertar_QNAME, Insertar.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link InsertarResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.electroescom.com/", name = "insertarResponse")
    public JAXBElement<InsertarResponse> createInsertarResponse(InsertarResponse value) {
        return new JAXBElement<InsertarResponse>(_InsertarResponse_QNAME, InsertarResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarUsuarios }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.electroescom.com/", name = "consultarUsuarios")
    public JAXBElement<ConsultarUsuarios> createConsultarUsuarios(ConsultarUsuarios value) {
        return new JAXBElement<ConsultarUsuarios>(_ConsultarUsuarios_QNAME, ConsultarUsuarios.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarUsuariosResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.electroescom.com/", name = "consultarUsuariosResponse")
    public JAXBElement<ConsultarUsuariosResponse> createConsultarUsuariosResponse(ConsultarUsuariosResponse value) {
        return new JAXBElement<ConsultarUsuariosResponse>(_ConsultarUsuariosResponse_QNAME, ConsultarUsuariosResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link IniciarSesionResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.electroescom.com/", name = "iniciarSesionResponse")
    public JAXBElement<IniciarSesionResponse> createIniciarSesionResponse(IniciarSesionResponse value) {
        return new JAXBElement<IniciarSesionResponse>(_IniciarSesionResponse_QNAME, IniciarSesionResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link IniciarSesion }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.electroescom.com/", name = "iniciarSesion")
    public JAXBElement<IniciarSesion> createIniciarSesion(IniciarSesion value) {
        return new JAXBElement<IniciarSesion>(_IniciarSesion_QNAME, IniciarSesion.class, null, value);
    }

}
