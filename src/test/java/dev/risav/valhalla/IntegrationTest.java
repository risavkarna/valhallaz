package dev.risav.valhalla;

import dev.risav.valhalla.config.AsyncSyncConfiguration;
import dev.risav.valhalla.config.EmbeddedElasticsearch;
import dev.risav.valhalla.config.EmbeddedSQL;
import dev.risav.valhalla.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { ValhallaApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedElasticsearch
@EmbeddedSQL
public @interface IntegrationTest {
}
